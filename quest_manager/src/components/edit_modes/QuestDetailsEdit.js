import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import CharList from '../chars/CharsList'
import {updateQuestTitle} from '../../store/actions/updateQuestTitle'
import {createCharacter} from '../../store/actions/createCharacter'
import RollingDiceInfo from '../layout/RollingDiceInfo'

class QuestDetailsEdit extends React.Component{

}