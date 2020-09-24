import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import {Link} from 'react-router-dom'

class Landing extends Component{

    state ={
        email: '',
        password: ''
    }

    handleClick = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.signIn()
    }

    

    render(){
        const usrSignIn = this.props.auth.uid ? 
        <a href='/dashboard'><button className="btn grey darken-4 lighten-1 waves-effect waves-light z-depth-0">Your Quests</button></a> : 
        <div className="row">
            <div><Link to='/signin'><button className="btn grey darken-4 lighten-1 waves-effect waves-light z-depth-0">Log In</button></Link></div>
            <p>or</p>
            <div><Link to='/signup'><button className="btn grey darken-4 lighten-1 waves-effect waves-light z-depth-0">Create Account</button></Link></div> 
        </div>;
        return(
            <div className="dashboard container">
                            <h1 className=" center-align">Welcome to the Quest RPG Manager</h1>
                            <h3>About</h3>
                            <p className="landing-text">
                                    This is a hobby project that serves as an alternative to the 
                                &nbsp;<a href="https://playquest.online/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn grey darken-4 z-depth-0">PlayQuest.Online</button>
                                </a>&nbsp;
                                website. It serves the same purpose as an unofficial aid to the 
                                &nbsp;<a href="https://www.adventure.game/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn grey darken-4 z-depth-0">Quest RPG System</button>
                                    &nbsp;</a>&nbsp;
                                It provides the same functionality where players and GMs can handle their adventures in real time. As with PlayQuest,
                                abilities and inventory items are not provided by default. Quest is a great RPG system and I would encourage people to 
                                &nbsp;<a href="https://www.adventure.game/store" target="_blank" rel="noopener noreferrer">
                                    <button className="btn grey darken-4 z-depth-0">Buy Quest</button> 
                                </a>&nbsp;
                                from their site to get that information to add, unless you want to make up your own.
                                The goal of this specific project though was to provide enhanced UI/UX as well as provide an open source alternative to
                                the PlayQuest.Online site. 
                                All of the code is hosted on
                                &nbsp;<a href="https://github.com/evanmdort/QuestRPGManagerSite" target="_blank" rel="noopener noreferrer">
                                    <button className="btn grey darken-4 z-depth-0">github</button>
                                </a>&nbsp;
                                so updates, changes, and improvements can be made by anyone wanting to make the site better. This site was built using React
                                for the dynamic display, Redux for statemangement, and Firebase for hosting and the database backend.
                            </p>
                            <h3>Contact</h3>
                            <p className="landing-text">
                            Found a horrible bug? Got a feature request? If you have website design experience,
                            see if you can contribute to the project     &nbsp;                             
                            <a href="https://github.com/evanmdort/QuestRPGManagerSite" target="_blank" rel="noopener noreferrer">
                                     here.
                                </a>&nbsp;
                            Otherwise, you can try to message me on the 
                            &nbsp;<a href="https://www.adventure.game/chat-and-forums" target="_blank" rel="noopener noreferrer">
                                    <button className="btn grey darken-4 z-depth-0">Quest Discord.</button>
                                </a>&nbsp;
                            I'm @recon14193
                            </p>
                            <h3>Credit</h3>
                            <p>I had an immense amount of help and used numerous resources to complete this site. Please check out my 
                            &nbsp;<a href="/credits">
                                    <button className="btn grey darken-4 l z-depth-0">Credits</button>
                                </a>&nbsp;
                            page to see and acknowledge the sources that made this site possible.
                            </p>
                            <h3>Start some Adventures!</h3>
                            { usrSignIn }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn())
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)