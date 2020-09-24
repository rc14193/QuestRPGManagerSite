import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { signIn } from '../../store/actions/authActions'
import GoogleButton from 'react-google-button'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    
    state ={
        email: '',
        password: '',
        passwordConfirm: '',
        passMatch: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.signIn()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if(this.state.password===this.state.passwordConfirm){
            this.props.signUp(this.state)
        }
        else if (this.state.password!==this.state.passwordConfirm){
            this.setState({
                passMatch: "Passwords do not match"
            })
            //console.log("no match")
        }
    }

    render(){

        if(this.props.auth.uid){ 
            return <Redirect to='/dashboard' />
            }
        const {authError} = this.props
        return(
           <div className="container">
               <form onSubmit={this.handleSubmit} className="grey darken-4">
                   <h5 className="white-text">Sign Up</h5>
                   <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="grey darken-4 white-text" onChange={this.handleChange} required/>
                   </div>
                   <div className="input-field">
                   <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="grey darken-4 white-text" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input type="password" id="passwordConfirm" className="grey darken-4 white-text" onChange={this.handleChange} required/>
                   </div>
                   <div className="input-field">
                       <button className="btn grey darken-3 z-depth-0">Sign Up</button>
                   </div>
                   <div className="red-text">{ authError ? <p>{authError}</p> : null}</div>
                   <div className="red-text">{ this.state.passMatch ? <p>{this.state.passMatch}</p> : null}</div>
               </form>

               <h4>Or</h4>
               <GoogleButton onClick={this.handleClick}/>
           </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
        signIn: () => dispatch(signIn())
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)