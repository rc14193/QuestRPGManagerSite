export const updateCharInf = (character,newName) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var chars = firestore.collection("characters").doc(character.char.id)


        console.log(character)
        console.log(newName)

        if(newName.type==="Description"){

            chars.update({

                Description: newName.Description

            })
        }

        if(newName.type==="item"){

                var newItem = {Name: newName.ItemName, Description: newName.Item}
                console.log(newItem)
    
                chars.update({
    
                    inventory: firestore.FieldValue.arrayUnion(newItem)
    
                })

        }

        if(newName.type==="ability"){

            var newAbility = {Name: newName.AbilityName, Description: newName.Ability}
            console.log(newAbility)

            chars.update({

                
                abilities: firestore.FieldValue.arrayUnion(newAbility)

            })
        }
        
    }
};