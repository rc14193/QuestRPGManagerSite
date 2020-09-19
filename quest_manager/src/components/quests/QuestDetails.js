import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import CharList from '../chars/CharsList'
import {updateQuestTitle} from '../../store/actions/updateQuestTitle'
import {createCharacter} from '../../store/actions/createCharacter'

class QuestDetails extends React.Component{

state = {editMode: false, quest_title: ""}


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

        handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        }

        handleTitleUpdate= (e) => {
            e.preventDefault();
            //console.log(this.state)
            this.props.updateQuestTitle(this.props,this.state)
        }

        handleLink = (e) => {
            return <Redirect to={'/quest/'+this.props.id+'/join'} />
        }

        handleNewChar = (e) => {

            e.preventDefault();
            //console.log(this.state)
            this.props.createCharacter(this.props,this.state)

        }

      
    id = this.props.match.params.id;

    render(){
    if(!this.props.auth.uid){
            return <Redirect to='/' />
    }


    if(this.state.editMode === true){

        if(this.props.quest){
            //console.log(this.props)
            return (
                <div>
                    
                    <div className="switch" style={{float: "right"}}>
                        <label>
                            Edit Mode
                            <input type="checkbox"></input>
                            <span className="lever" onClick={this.handleClick}></span>
                              
                        </label>
                    </div>

                    <div className="container section project-details">
                        <div className="card z-depth-0">
                            <div className="card content grey darken-4 quest-title">
                                <span className="card-title">{this.props.quest.quest_title}</span>
                                <form>
                                    <input type="text" className="quest-title" id="quest_title" onChange={this.handleChange}></input>
                                    <button className="btn grey darken-3 lighten-1 waves-effect waves-light z-depth-0" onClick={this.handleTitleUpdate}>Update Quest Title</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <button className="btn grey darken-4 lighten-1 waves-effect waves-light z-depth-0" onClick={this.handleNewChar}>Add Character</button>
                    <a href={'/quest/'+this.props.id+'/join'} style={{float: "right"}} onClick={this.handleLink}>
                            <button className="btn grey darken-4 z-depth-0">Add Players</button>
                        </a>
                    <CharList chars={this.props.chars} editMode={this.state.editMode} id={this.props.id}/>
                </div>
            )
        }
        else{
            return(
                <div className="container center grey darken-4 text-white">
                    <p>Loading quest...</p>
                </div>
            )
        }

    }
    else{
        if(this.props.quest){
            //console.log(this.props)
            return (
                <div>
                    
                    <div className="switch" style={{float: "right"}}>
                        <label>
                            Edit Mode
                            <input type="checkbox"></input>
                            <span className="lever" onClick={this.handleClick}></span>
                              
                        </label>
                    </div>
                    <div className="container section project-details">
                        <div className="card z-depth-0">
                            <div className="card content grey darken-4 quest-title">
                                <span className="card-title">{this.props.quest.quest_title}</span>
                            </div>
                        </div>

                    </div>
                    <button className="btn grey darken-4 lighten-1 waves-effect waves-light z-depth-0" onClick={this.handleNewChar}>Add Character</button>
                    <a href={'/quest/'+this.props.id+'/join'} style={{float: "right"}} onClick={this.handleLink}>
                            <button className="btn grey darken-4 lighten-1 waves-effect waves-light z-depth-0">Add Players</button>
                        </a>
                    <CharList chars={this.props.chars} editMode={this.state.editMode} id={this.props.id}/>
                </div>
            )
        }
        else{
            return(
                <div className="container center grey darken-4 text-white">
                    <p>Loading quest...</p>
                </div>
            )
        }
    }


}
}

const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.id
    const quests = state.firestore.data.quests
    const quest = quests ? quests[id] : null
    //console.log(state)
    return {
        quest: quest,
        auth: state.firebase.auth,
        chars: state.char,
        id:ownProps.match.params.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuestTitle: (quest,newName) => dispatch(updateQuestTitle(quest,newName)),
        createCharacter: (state) => dispatch(createCharacter(state))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'quests'}
    ])
)(QuestDetails)
