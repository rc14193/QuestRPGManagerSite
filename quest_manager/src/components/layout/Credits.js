import React, { Component } from 'react'


class Credits extends Component{
    render(){
        //console.log(this.props)
        return(
            <div className="dashboard container">
                <h1>Credits</h1>
                <ul>
                    <li>Box shadow styling aided by <a href="https://www.cssmatic.com/box-shadow" target="_blank" rel="noopener noreferrer">https://www.cssmatic.com/box-shadow</a></li>
                    <li>Google login button style from <a href="https://github.com/prescottprue/react-google-button" target="_blank" rel="noopener noreferrer">https://github.com/prescottprue/react-google-button</a> </li>
                    <li>Heart shape for health and AP icons from <a href="https://css-tricks.com/hearts-in-html-and-css/" target="_blank" rel="noopener noreferrer">https://css-tricks.com/hearts-in-html-and-css/</a> </li>
                    <li>A bug fix for prevent users from highlighting the increment/decremnt buttons for health/AP from <a rel="noopener noreferrer" href="https://stackoverflow.com/questions/2310734/how-to-make-html-text-unselectable" target="_blank">https://stackoverflow.com/questions/2310734/how-to-make-html-text-unselectable</a> </li>
                    <li>Icon for the logo from the free logos as <a href="https://icofont.com/" target="_blank" rel="noopener noreferrer">https://icofont.com/</a> </li>
                    <li>Generator to turn the Icon into the logo from <a rel="noopener noreferrer" href="https://realfavicongenerator.net/" target="_blank">https://realfavicongenerator.net/</a> </li>
                    <li>Huge thanks to Net Ninja for his amazing React, Redux Firebase and many other web design tutorials
                    &nbsp;<a href="https://www.youtube.com/c/TheNetNinja" target="_blank" rel="noopener noreferrer">
                                    <button className="btn grey darken-4 l z-depth-0">His Channel</button>
                                </a>&nbsp;
                    </li>
                </ul>
            </div>
        )
    }
}

export default Credits