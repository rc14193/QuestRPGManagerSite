import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


class Navbar extends React.Component{

    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      }

      signOut = (e) => {

        this.props.signOut()
        window.location.reload(false)

      }

    render(){
        const { auth } = this.props;

        if(auth.isLoaded && auth.uid){
            return(
            <div>
                <nav className="nav-wrapper grey darken-4" style={{padding: "3px"}}>
                    <div className="row navbar-icon">
                        <div className='right col navbar-icon'>
                            <NavLink to='/dashboard' className='right profile_btn btn btn-floating navbar-icon'>
                                <img className="navbar-icon" src={auth.photoURL} alt='site logo'></img>
                            </NavLink> 
                        </div>
                        <div className="left col navbar-icon">
                            <a href='#!' className='sidenav-trigger show-on-large white-text' data-target='side-links'>
                                <i className="material-icons">menu</i>
                            </a> 
                        </div>
                        <div className="center col offset-l4 offset-m3">
                            <Link to='/'>
                                    <img className="title-logo" src='/logo512.png' alt='site logo by title' />
                                    <span className="title-text">  Quest RPG Manager</span>
                            </Link>
                        </div>
                    </div>
                </nav>

                <ul id="side-links" className="sidenav grey darken-3 white-text">
                    <li><NavLink to='/' className="white-text">Home</NavLink></li>
                    <li><NavLink to='/dashboard' className="white-text">Quest Dashboard</NavLink></li>
                    <li><NavLink to='/credits' className="white-text">Credits</NavLink></li>
                    <li><a className="white-text" href='/' onClick={this.signOut}>Sign Out</a></li>
                </ul>
        
            </div>

            )
        }
        else{
            return(

                <div>
                <nav className="nav-wrapper grey darken-4" style={{padding: "3px"}}>
                    <div className="row">
                        <div className='right col navbar-icon'>
                            <NavLink to='/dashboard' className='right profile_btn btn btn-floating'>
                                <img src='/logo512.png' alt='site logo'></img>
                            </NavLink> 
                        </div>
                        <div className="left col navbar-icon">
                            <a href='#!' className='sidenav-trigger show-on-large white-text' data-target='side-links'>
                                <i className="material-icons">menu</i>
                            </a> 
                        </div>
                        <div className="center col offset-l4 offset-m3">
                            <Link to='/'>
                                    <img className="title-logo" src='/logo512.png' alt='site logo by title' />
                                    <span className="title-text">  Quest RPG Manager</span>
                            </Link>
                        </div>
                    </div>
                </nav>

                <ul id="side-links" className="sidenav grey darken-4 white-text">
                    <li><NavLink to='/' className="white-text">Home</NavLink></li>
                    <li><NavLink to='/credits' className="white-text">Credits</NavLink></li>
                </ul>
        
            </div>

                )
        }

    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)