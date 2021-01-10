import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import CharList from '../chars/CharsList'
import {updateQuestTitle} from '../../store/actions/updateQuestTitle'
import {createCharacter} from '../../store/actions/createCharacter'
import RollingDiceInfo from '../layout/RollingDiceInfo'
import {updateMode} from '../../store/actions/updateMode'

class QuestDetails extends React.Component{

state = {editMode: false, quest_title: ""}


      handleClick = (e) => {
        this.props.updateMode(this.props.mode)
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
    //console.log(this.state)
    if(!this.props.auth.uid){
            return <Redirect to='/' />
    }

    if(this.props.mode === true){
        if(this.props.quest){
            return (
                <div>
                    <RollingDiceInfo handleClick={this.handleClick.bind(this)}/>
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
                    <CharList chars={this.props.chars} {...this.props} id={this.props.id}/>
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
    else if(this.props.mode === false){
        if(this.props.quest){
            //console.log(this.props)
            return (
                <div> 
                    <RollingDiceInfo handleClick={this.handleClick.bind(this)}/>
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
    return {
        quest: quest,
        auth: state.firebase.auth,
        chars: state.char,
        id:ownProps.match.params.id,
        mode:state.status.editMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuestTitle: (quest,newName) => dispatch(updateQuestTitle(quest,newName)),
        createCharacter: (state) => dispatch(createCharacter(state)),
        updateMode: (mode) => dispatch(updateMode(mode))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),firestoreConnect((state) => { 
        return [
        { collection: 'characters', where: [['inQuest', '==', state.id]] },
        { type: 'child_changed', collection: 'quests', doc: state.id}
    ]})
)(QuestDetails)
