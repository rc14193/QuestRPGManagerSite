import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { incrementStats } from '../../store/actions/incrementStats'
import CharDetailsEdit from '../edit_modes/CharDetailsEdit'


class CharDetails extends React.Component{

    state = {charRole: this.props.char.role}

    handleIncrement = (type,direction) => {
        this.props.incrementStats(this.props.char,type,direction)
    }
      render(){

          if(!this.props.mode){

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

          else if(this.props.mode){

            return(
                <CharDetailsEdit {...this.state} {...this.props}/>
              )
          }
      }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementStats: (state,type,direction) => dispatch(incrementStats(state,type,direction))
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        auth: state.firebase.auth,
        mode:state.status.editMode
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(CharDetails)