


export const signIn = () => {
    
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((result) =>{
            dispatch({type: 'LOGIN_SUCCESS', user: firebase.auth});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR',err})
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        firebase.auth().signOut().then(() =>{
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        });
    }
}