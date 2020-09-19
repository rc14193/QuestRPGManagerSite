

export const createQuestAction = (quest) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        const auth = getState().firebase.auth
        var newQuest = firestore.collection("quests").doc();
        console.log(dispatch)

        newQuest.set({
            quest_title: quest.quest_title,
            allowedUsers: [auth.uid]
            }).then(() =>{
                dispatch({type:'CREATE_QUEST', quest})
            }).catch((err) => {
                dispatch({ type: 'CREATE_QUEST_ERR', err})
            })
        
    }
};