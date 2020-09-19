const initState = {
    quests:[
        {id: '1', title:'The Halls of Terakas', content:'Usidore is best'},
        {id: '2', title:'Chunt Please', content:'Super cool shapeshifter'},
        {id: '3', title:'Carnival Wilson', content:'I guess Arnie is ok'} 
    ]
}


const questReducer =(state = initState, action) => {
    switch (action.type){
        case 'CREATE_QUEST':
            //console.log('created quest', action.quest)
            return state;
        case 'CREATE_QUEST_ERR':
            //console.log('create quest error', action.err)
            return state;
        default:
            return state;
    }
}

export default questReducer