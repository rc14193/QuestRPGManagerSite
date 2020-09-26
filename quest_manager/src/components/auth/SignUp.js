import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpEmail } from '../../store/actions/authActions'
import { signInGoogle } from '../../store/actions/authActions'
import GoogleButton from 'react-google-button'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    
    state ={
        email: '',
        password: '',
        passwordConfirm: '',
        passMatchErr: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.signInGoogle()
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.password===this.state.passwordConfirm){
            this.props.signUpEmail(this.state)
        }

        else if (this.state.password!==this.state.passwordConfirm){
            this.setState({
                passMatchErr: "Passwords do not match"
            })
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
                    <p className="white-text">Sign Up</p>
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
                    <button className="btn grey darken-3 z-depth-0">Sign Up</button>
                    <div className="red-text">{ authError ? <p>{authError}</p> : null}</div>
                    <div className="red-text">{ this.state.passMatchErr ? <p>{this.state.passMatchErr}</p> : null}</div>
               </form>
               <p>Or</p>
               <GoogleButton onClick={this.handleClick}/>
           </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpEmail: (newUser) => dispatch(signUpEmail(newUser)),
        signInGoogle: () => dispatch(signInGoogle())
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)