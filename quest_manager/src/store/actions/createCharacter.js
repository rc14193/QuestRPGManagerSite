

export const createCharacter = (quest) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var newChar = firestore.collection("characters").doc();
        //console.log(quest)

        newChar.set({
            inQuest: quest.id,
            charName: 'Untitled',
            Description: '',
            health: '0', 
            mana: '0', 
            role:'', 
            }).then(() =>{
                dispatch({type:'CREATE_CHAR', quest})
            }).catch((err) => {
                dispatch({ type: 'CREATE_CHAR_ERR', err})
            })
        
    }
};