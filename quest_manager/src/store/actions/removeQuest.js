export const removeQuest = (quest) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        // async db call
        const firestore = getFirestore();
        console.log(quest)
        firestore.collection('quests').doc(quest).delete().then(() =>{
                dispatch({type:'DELETE_QUEST', dispatch})
            }).catch((err) => {
                dispatch({ type: 'DELETE_QUEST_ERR', err})
            })
        
    }
};