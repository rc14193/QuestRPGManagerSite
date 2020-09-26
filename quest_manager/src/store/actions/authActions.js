


export const signInGoogle = () => {
    
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

export const signInEmailAndPass = (userInf) => {

    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            userInf.email,
            userInf.password
        ).then(() => {
            dispatch({ type: "LOGIN_SUCCESS", user: firebase.auth})
        }).catch(err => {
            dispatch({ type: "LOGIN_ERROR", err})
        })
    }


}

export const signUpEmail = (newUser) => {

    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(() => {
            dispatch({ type: "SIGNUP_SUCCESS"})
        }).catch(err => {
            dispatch({ type: "SIGNUP_ERROR", err})
        })
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