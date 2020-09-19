import React from 'react'
import {connect} from 'react-redux'
import {joinQuest} from '../../store/actions/joinQuest'
import {Redirect} from 'react-router-dom'

class QuestJoin extends React.Component{

    componentDidMount(){

        this.props.joinQuest(this.props)

    }


    render(){
        const {auth} = this.props

        if(!auth.uid){ 
            return <Redirect to='/' />
            }
        return(
            <div className="dashboard container">
                <h3>Send the following link to your friends and they will be automatically added to the quest: <p>{window.location.href}</p></h3>
            </div>
        )
    }

}

const mapStateToProps = (state,ownProps) => {
    return {
        auth: state.firebase.auth,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        joinQuest: (quest,newName) => dispatch(joinQuest(quest,newName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestJoin)