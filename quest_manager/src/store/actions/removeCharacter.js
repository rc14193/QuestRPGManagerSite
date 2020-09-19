export const removeCharacter = (char) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        // async db call
        const firestore = getFirestore();
        //console.log(char.char.id)
        firestore.collection('characters').doc(char.char.id).delete().then(() =>{
                dispatch({type:'DELETE_QUEST', dispatch})
            }).catch((err) => {
                dispatch({ type: 'DELETE_QUEST_ERR', err})
            })
        
    }
};