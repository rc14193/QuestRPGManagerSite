
export const updateCharName = (character,newName) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var newQuest = firestore.collection("characters").doc(character.char.id)
        //console.log(character.char.id)
        //console.log(newName.charName)
           
        newQuest.update({
            
            charName: newName.charName

            }).then(() =>{
                dispatch({type:'UPDATE_QUEST_TITLE', character})
            }).catch((err) => {
                dispatch({ type: 'UPDATE_QUEST_TITLE_ERR', err})
            })
        
    }
};