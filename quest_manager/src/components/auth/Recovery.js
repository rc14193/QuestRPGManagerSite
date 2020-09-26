import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import firebase from 'firebase/app'

class Recovery extends Component {
    
    state ={
        email: '',
        err:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var auth = firebase.auth()
        var email = this.state.email
        if (email!==''){
            auth.sendPasswordResetEmail(email)
            window.alert('Reset email sent')
        }
        else{
            this.setState({
                err: 'Email required'
            })
        }
    }

    render(){

        if(this.props.auth.uid){ 
            return <Redirect to='/dashboard' />
            }

        return(
           <div className="container">
               <form onSubmit={this.handleSubmit} className="grey darken-4">
                <p>Reset Password</p>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="white-text" onChange={this.handleChange} required/>
                </div>
                <div className="input-field">
                    <button className="btn grey darken-3 z-depth-0">Request Password Reset</button>
                    <div className="text-red">{ this.state.err ? <p>{this.state.err}</p> : null}</div>
                </div>
               </form>
           </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Recovery)