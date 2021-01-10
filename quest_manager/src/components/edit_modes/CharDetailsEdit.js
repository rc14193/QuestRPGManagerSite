import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateCharName } from '../../store/actions/updateCharName'
import { removeCharacter } from '../../store/actions/removeCharacter'
import { changeCharRole } from '../../store/actions/changeCharRole'


class CharDetailsEdit extends React.Component{
    state = {charRole: this.props.char.role}

    handleChange = (e) => {
      this.setState({
          charName: e.target.value
      })

  }

  changeRole = (e) => {
      this.setState({
          charRole: e.target.value
      })
      this.props.changeCharRole(e.target.value,this.props.char.id)
  }

  handleCharNameUpdate = (e) => {
      e.preventDefault();
      this.props.updateCharName(this.props,this.state)
  }

  handleCharDel = (e) =>{
      this.props.removeCharacter(this.props)
  }
    render(){
        return (
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
                    <select id={"role" +this.props.char.id} className="browser-default" name="role" onChange={this.changeRole} value={this.state.charRole}>
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


const mapDispatchToProps = (dispatch) => {
    return {
        updateCharName: (character,newName) => dispatch(updateCharName(character,newName)),
        removeCharacter: (state) => dispatch(removeCharacter(state)),
        changeCharRole: (newRole,char) => dispatch(changeCharRole(newRole,char))
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(CharDetailsEdit)