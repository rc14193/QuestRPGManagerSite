export const removeCharInf = (character) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var chars = firestore.collection("characters").doc(character.charID)


        console.log(character.charID)
        //console.log(newName)

        if(character.itemType==="Inventory"){

            var newItem = {Name: character.item.Name, Description: character.item.Description}
            console.log(newItem)
    
               chars.update({
    
                    inventory: firestore.FieldValue.arrayRemove(newItem)
    
                })

        }

        if(character.itemType==="Ability"){

            var newAbility = {Name: character.item.Name, Description: character.item.Description}
            console.log(newAbility)

            chars.update({

                
                abilities: firestore.FieldValue.arrayRemove(newAbility)

            })
        }
        
    }
};