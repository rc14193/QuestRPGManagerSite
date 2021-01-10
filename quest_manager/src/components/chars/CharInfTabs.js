import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import CharValueTooled from "./CharValueTooled";
import {updateCharInf} from "../../store/actions/updateCharInf"
import {connect} from 'react-redux'
import CharInfTabsEdit from '../edit_modes/CharInfTabsEdit'

class CharInfTabs extends Component {

  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }

  componentDidUpdate(prevProps){
    if (this.props.mode !== prevProps.mode){
      M.Tabs.init(this.Tabs);
    }
  }

  render() {
      if(!this.props.mode){

        return (
          <div>
              <ul ref={(Tabs=this.props.char.id+'1') => {this.Tabs = Tabs;}} id="tabs-swipe-demo"
                className="tabs grey darken-4 white-text">
                  <li className="tab col">
                      <a className="active" href={'#'+this.props.char.id+'1'}>Abilities</a>
                  </li>
                  <li className="tab col">
                      <a href={'#'+this.props.char.id+'2'}>Inventory</a>
                  </li>
                  <li className="tab col">
                      <a href={'#'+this.props.char.id+'3'}>Description</a>
                  </li>
              </ul>
            <div id={this.props.char.id+'1'} className="col s12 table-container">
              <div>
                  {this.props.char.abilities && this.props.char.abilities.map((ability) => {
                    return(
                        <div key={ability.Name}>
                            <CharValueTooled charID={this.props.char.id} item={ability} {...this.props} itemType='Ability'/>
                        </div>
                        )
                      }
                    )
                  }
              </div>
            </div>
            <div id={this.props.char.id+'2'} className="col s12 table-container">
                <div>
                    {this.props.char.inventory && this.props.char.inventory.map((ability) => {
                      return(
                          <div key={ability.Name}>
                              <CharValueTooled charID={this.props.char.id} item={ability} {...this.props.mode} itemType='Invetory'/>
                          </div>
                          )
                        }
                      )
                    }
                </div>
            </div>
            <div  id={this.props.char.id+'3'} className="col s12  descFormat table-container">
                  <div className="row">
                      {this.props.char.Description}
                  </div>
            </div>
          </div>
        );
      }

      else if(this.props.mode){
          return(
            <CharInfTabsEdit {...this.props}/>
          )
      } 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateCharInf: (props,state) => dispatch(updateCharInf(props,state))
  }
}

export default connect(null, mapDispatchToProps)(CharInfTabs);

//<CharInfTabsEdit />
