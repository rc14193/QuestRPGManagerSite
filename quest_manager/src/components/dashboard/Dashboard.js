import React, { Component } from 'react'
import QuestList from '../quests/QuestList'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component{

    state = {
        editMode: false,
    }

    handleClick = (e) => {

        if (this.state.editMode === false){
            this.setState({
                editMode: true
            })
        }
            else{
                this.setState({
                    editMode:false
                })
            }
        }
        
    
    render(){

        const {quests, auth} = this.props;

        if(!auth.uid){ 
            return <Redirect to='/' />
            }

        return(
            <div>
                <div className="switch" style={{float: "right"}}>
                    <label>
                        Edit Mode
                        <input type="checkbox"></input>
                        <span className="lever" onClick={this.handleClick}></span>
                          
                    </label>
                </div>

                <div className="dashboard container">
                    <div className="col s12 m6">
                        <div className="col s12 m5">
                            <QuestList quests={quests} editMode={this.state.editMode}/>
                            <NavLink to='/create'>
                                <div className="waves-effect waves-light btn grey darken-4 white-text">
                                    <span>New Quest</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        quests: state.firestore.ordered.quests,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((state) => { 
        return [
        { collection: 'quests', storeAs: 'quests', where: [['allowedUsers', 'array-contains-any', [state.auth.uid]]] }
    ]})
)(Dashboard)