import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInEmailAndPass } from '../../store/actions/authActions'
import GoogleButton from 'react-google-button'
import {Redirect} from 'react-router-dom'

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

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
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
                   <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="white-text" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="white-text" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <button className="btn grey darken-3 z-depth-0">Log in</button>
                   <div className="text-red">{ authError ? <p>{authError}</p> : null}</div>
                   </div>
               </form>
               <h4>Or</h4>
               <GoogleButton onClick={this.handleClick}/>
           </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInEmailAndPass : (userInf) => dispatch(signInEmailAndPass(userInf))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)