import React from 'react'
import {removeQuest} from '../../store/actions/removeQuest'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class QuestSummary extends React.Component{

    handleDel = (e) => {
        //console.log(this.props.quest.id)
        this.props.removeQuest(this.props.quest.id)
    }

    render(){
        const deleteBtn = this.props.editMode ? <button className="delbtn grey darken-3" onClick={this.handleDel}> Delete </button> : null; 
        return(
            <div>
                <div className="card grey darken-4 z-depth-3 project-summary">
                { deleteBtn }
                    <Link to={'/quest/'+this.props.quest.id}>
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.quest.quest_title}</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }




}



const mapDispatchToProps = (dispatch) => {
    return {
        removeQuest: (quest) => dispatch(removeQuest(quest))
    }
}



export default connect(null,mapDispatchToProps)(QuestSummary)