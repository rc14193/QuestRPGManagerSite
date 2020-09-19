
export const incrementStats = (stats,type,direction) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var charStats = firestore.collection("characters").doc(stats.id)


        if(type==='mana'){
            if(direction==='up'){

                charStats.update({
            
                    mana: firestore.FieldValue.increment(1)
        
                    }).then(() =>{
                        dispatch({type:'UPDATE_QUEST_TITLE', })
                    }).catch((err) => {
                        dispatch({ type: 'UPDATE_QUEST_TITLE_ERR', err})
                    })

            }
            else{

                charStats.update({
            
                    mana: firestore.FieldValue.increment(-1)
        
                    }).then(() =>{
                        dispatch({type:'UPDATE_QUEST_TITLE', })
                    }).catch((err) => {
                        dispatch({ type: 'UPDATE_QUEST_TITLE_ERR', err})
                    })
                
            }
        }
        else if(type==='health'){
            if(direction==='up'){

                charStats.update({
            
                    health: firestore.FieldValue.increment(1)
        
                    }).then(() =>{
                        dispatch({type:'UPDATE_QUEST_TITLE', })
                    }).catch((err) => {
                        dispatch({ type: 'UPDATE_QUEST_TITLE_ERR', err})
                    })

            }
            else{

                charStats.update({
            
                    health: firestore.FieldValue.increment(-1)
        
                    }).then(() =>{
                        dispatch({type:'UPDATE_QUEST_TITLE', })
                    }).catch((err) => {
                        dispatch({ type: 'UPDATE_QUEST_TITLE_ERR', err})
                    })
                
            }
        }
           

        
    }
};