import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import CharValueTooled from "../chars/CharValueTooled";
import {updateCharInf} from "../../store/actions/updateCharInf"
import {connect} from 'react-redux'



class CharInfTabsEdit extends Component {

  state={
    Description: '',
    Ability: '',
    AbilityName: '',
    ItemName: '',
    Item: ''
  }
    
    componentDidMount() {
        M.Tabs.init(this.Tabs);
      }

    handleChange = (e) => {
        this.setState({
        Description: e.target.value,
        type: 'Description'
        })
    }

    handleItemChange = (e) => {
    this.setState({
        Item: e.target.value,
        type: 'item'
        })
    }

    handleAbilityChange = (e) => {
        this.setState({
            Ability: e.target.value,
            type: 'ability'
            })
    }

    handleItemNameChange = (e) => {
        this.setState({
            ItemName: e.target.value,
            type: 'item'
            })
    }

    handleAbilityNameChange = (e) => {
        this.setState({
            AbilityName: e.target.value,
            type: 'ability'
            })
    }

    handleCharDesc= (e) => {
        e.preventDefault();
        this.props.updateCharInf(this.props,this.state)
    }

    render(){
        return (
            <div>
        
                <ul ref={Tabs => {this.Tabs = Tabs;}} id="tabs-swipe-demo"
                  className="tabs grey darken-4 white-text">
                    <li className="tab col">
                        <a href={'#'+this.props.char.id+'1'}>Abilities</a>
                    </li>
                    <li className="tab col">
                        <a href={'#'+this.props.char.id+'2'}>Inventory</a>
                    </li>
                    <li className="tab col">
                        <a href={'#'+this.props.char.id+'3'}>Description</a>
                    </li>
                </ul>
        <div id={this.props.char.id+'1'} className="col s12">
        <div className="table-container-edit">
              <div>
                  {this.props.char.abilities && this.props.char.abilities.map((ability) => {
                        return(
                        <div key={ability.Name}>
                          <CharValueTooled charID={this.props.char.id} item={ability} {...this.props}  itemType='Ability'/>
                        </div>
                        )
                      }
                    )
                  }
              </div>
              </div>
              <div>
                  <div className="withoutShadow left-align">
                    <form style={{margin: "5px"}}>
                        <label htmlFor={"abilityName"+this.props.char.id} >Ability Name</label><br/>
                          <input type="text" style={{color: "white"}} id={"abilityName"+this.props.char.id} onChange={this.handleAbilityNameChange}></input>
                        <label htmlFor={"ability"+this.props.char.id}>Ability Description</label><br/>
                          <textarea className="quest-title txtFieldFormat" id={"ability"+this.props.char.id} onChange={this.handleAbilityChange}></textarea><br/>
                        <button onClick={this.handleCharDesc}>Add Ability</button>
                    </form>
                  </div>
              </div>
        </div>
        <div id={this.props.char.id+'2'} className="col s12">
        <div className="table-container-edit">
              <div>
                  {this.props.char.inventory && this.props.char.inventory.map((ability) => {
                        return(
                            <div key={ability.Name}>
                                <CharValueTooled charID={this.props.char.id} item={ability} {...this.props}  itemType='Inventory'/>
                            </div>
                            )
                          }
                        )
                      }
              </div>
        </div>
                  <div className="withoutShadow left-align">
                      <form style={{margin: "5px"}}>
                          <label htmlFor={"itemsName"+this.props.char.id} >Item Name</label><br/>
                            <input type="text" style={{color: "white"}} id={"itemsName"+this.props.char.id} onChange={this.handleItemNameChange}></input>
                          <label htmlFor={"items"+this.props.char.id}>Item Description</label><br/>
                            <textarea className="quest-title txtFieldFormat" id={"items"+this.props.char.id} onChange={this.handleItemChange}></textarea><br/>
                          <button onClick={this.handleCharDesc}>Add Item</button>
                      </form>
                  </div>
        
              </div>
        
              <div id={this.props.char.id+'3'} className="col s12 descFormat">
              <div className="table-container-edit">
                      {this.props.char.Description}
                </div>
                  <form>
                      <textarea className="quest-title left-align" id={"Description "+this.props.char.id} onChange={this.handleChange}></textarea>
                      <button onClick={this.handleCharDesc}>Update Description</button>
                  </form>
              </div>
            </div>
          );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateCharInf: (props,state) => dispatch(updateCharInf(props,state))
    }
  }
  
  export default connect(null, mapDispatchToProps)(CharInfTabsEdit);