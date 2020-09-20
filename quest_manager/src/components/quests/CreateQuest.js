import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createQuestAction} from '../../store/actions/createQuestActions'
import {Redirect} from 'react-router-dom'

class CreateQuest extends Component {
    
    state ={
        quest_title: '',
        toDashboard: false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createQuestAction(this.state)
        this.setState({
            toDashboard: true
        })
    }

    render(){
        const {auth} = this.props;
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
          }

        if(!auth.uid){
            return <Redirect to='/' />
        }
        
        return(
           <div className="container">
               <form onSubmit={this.handleSubmit} className="grey darken-4">
                   <h5 className="white-text">Create A Quest</h5>
                   <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="quest_title" className="white-text" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <button className="btn grey darken-3 lighten-1 z-depth-0">Create Quest</button>
                   </div>
               </form>
           </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createQuestAction: (quest) => dispatch(createQuestAction(quest))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateQuest)