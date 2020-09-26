import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInEmailAndPass } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { Redirect } from 'react-router-dom'
import { signInGoogle } from '../../store/actions/authActions'

class SignIn extends Component {
    
    state ={
        email: '',
        password: ''
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
        this.props.signInEmailAndPass(this.state)
    }

    render(){

        if(this.props.auth.uid){ 
            return <Redirect to='/dashboard' />
            }

        const {authError} = this.props

        return(
           <div className="container">
               <form onSubmit={this.handleSubmit} className="grey darken-4">
               <p>Sign In</p>
                   <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="white-text" onChange={this.handleChange} required/>
                   </div>
                   <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="white-text" onChange={this.handleChange} required/>
                   </div>
                    <button className="btn grey darken-3 z-depth-0">Log in</button>
                    &nbsp;<Link to='/signup'>Create Account</Link>&nbsp;
                    &nbsp;<Link to='/recovery'>Reset Password</Link>&nbsp;
                    <div className="text-red">{ authError ? <p>{authError}</p> : null}</div>
               </form>
               <p>Or</p>
               <GoogleButton onClick={this.handleClick}/>
           </div> 
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signInEmailAndPass : (userInf) => dispatch(signInEmailAndPass(userInf)),
        signInGoogle: () => dispatch(signInGoogle())
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)