
export const joinQuest = (quest) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var usrJoin = firestore.collection("quests").doc(quest.match.params.id);
        //console.log(quest.match.params.id)
        //console.log(quest.auth.uid)
        

        usrJoin.update({

            allowedUsers: firestore.FieldValue.arrayUnion(quest.auth.uid)

            }).then(() =>{
                dispatch({type:'CREATE_CHAR', quest})
            }).catch((err) => {
                dispatch({ type: 'CREATE_CHAR_ERR', err})
            })
        
    }
};