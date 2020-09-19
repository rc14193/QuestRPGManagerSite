import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {updateCharName} from '../../store/actions/updateCharName'
import { removeCharacter } from '../../store/actions/removeCharacter'
import {incrementStats} from '../../store/actions/incrementStats'
import { changeCharRole } from '../../store/actions/changeCharRole'


class CharDetails extends React.Component{


        state = {editMode: false, value: this.props.char.role}

      handleChange = (e) => {
        this.setState({
            charName: e.target.value
        })

    }

    changeRole = (e) => {
        this.setState({
            value: e.target.value
        })
        this.props.changeCharRole(e.target.value,this.props.char.id)
    }

    handleIncrement = (type,direction) => {
        //console.log(type)
        this.props.incrementStats(this.props.char,type,direction)
    }

    handleCharNameUpdate = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.updateCharName(this.props,this.state)
    }

    handleCharDel = (e) =>{
        this.props.removeCharacter(this.props)
    }

      render(){
          //console.log(this.state)
          //console.log(this.props)
          if(!this.props.editMode){

            return(
                <div className="center-align" style={{color: "white"}}>
    
                    <div className="charTitle">{this.props.char.charName}</div>
                    <div className="roleTitle">Role: {this.props.char.role}</div>
                    <div className="felx-displayed">
                        <div>
                            <i className="material-icons red-text tiny">favorite</i> Health: {this.props.char.health}    
                        </div>
                        <div >
                            <i className="material-icons red-text tiny incrementors pointed unselectable" onClick={() => this.handleIncrement('health','up')}>add</i>/
                            <i className="material-icons red-text tiny pointed unselectable" onClick={() => this.handleIncrement('health','down')}>remove</i>   
                        </div>
                    </div>
                    <div className="felx-displayed">
                        <div>
                            <i className="material-icons blue-text tiny pointed">favorite</i> AP: {this.props.char.mana}    
                        </div>
                        <div >
                            <i className="material-icons blue-text tiny incrementors pointed unselectable" onClick={() => this.handleIncrement('mana','up')}>add</i>
                            /<i className="material-icons blue-text tiny pointed unselectable" onClick={() => this.handleIncrement('mana','down')}>remove</i>   
                        </div>
                    </div>
    
                </div>
              )

          }
          else{

            return(
                <div className="" style={{color: "white"}}>
                    <i style={{color:'red'}} className="pointed small material-icons right-align" onClick={this.handleCharDel}>cancel</i>
                    <div className="center-align">
                        <div className="charTitle">{this.props.char.charName}</div>
                        <div className="roleTitle">Role: {this.props.char.role}</div>
                            <form>
                                <input type="text" className="quest-title" id={"charName "+this.props.char.id} onChange={this.handleChange}></input>
                                <button onClick={this.handleCharNameUpdate}>Update Character Name</button>
                            </form>
                        <form className="browser-default">
                            <select id={"role" +this.props.char.id} className="browser-default" name="role" onChange={this.changeRole} value={this.state.value}>
                                <option value="">Select</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Invoker">Invoker</option>
                                <option value="Ranger">Ranger</option>
                                <option value="Naturalist">Naturalist</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Spy">Spy</option>
                                <option value="Magician">Magician</option>
                                <option value="Wizard">Wizard</option>
                            </select>
                        </form>
                    </div>
                </div>
              )
            
          }
          
      }


}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCharName: (character,newName) => dispatch(updateCharName(character,newName)),
        removeCharacter: (state) => dispatch(removeCharacter(state)),
        incrementStats: (state,type,direction) => dispatch(incrementStats(state,type,direction)),
        changeCharRole: (newRole,char) => dispatch(changeCharRole(newRole,char))
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        //quest: quest,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
    ])
)(CharDetails)

/*                      <div className="">
                        <div className="row center-align roleTitle">
                            <div className="col s2">
                                    <span>Helath</span>
                                    <span className="col">
                                    {this.props.char.health}
                                    </span>
                            </div>
                            <div className="col s2">
                                    <span>Mana</span>
                                    <span className="col">
                                    {this.props.char.mana}
                                    </span>
                            </div>
                        </div>
                    </div>   */