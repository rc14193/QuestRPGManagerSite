
export const changeCharRole = (newRole,character) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var changeRole = firestore.collection("characters").doc(character)
        //console.log(character)
        //console.log(newRole)
           
        changeRole.update({
            
            role: newRole

            }).then(() =>{
                dispatch({type:'UPDATE_QUEST_TITLE', character})
            }).catch((err) => {
                dispatch({ type: 'UPDATE_QUEST_TITLE_ERR', err})
            })
        
    }
};