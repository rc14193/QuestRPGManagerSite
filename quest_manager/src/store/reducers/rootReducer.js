import authReducer from './authReducer'
import questReducer from './questReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import charReducer from './charReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    quest: questReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    char: charReducer
});

export default rootReducer