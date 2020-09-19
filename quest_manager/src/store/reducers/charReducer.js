const initState = {
    chars:[
        {id: '1', charName:'The Halls of Terakas', description:'Usidore is best', health: '10', mana: '10', role:'Naturalist', abilities:[{Name:'Scream',Description:'Yell Loud!'},{Name:'Blank',Description:'Disappear'}],inventory:[{Name:'Rock',Description:'Is Rock'},{Name:'Bowl',Description:'Is Bowl'}]},
        {id: '2', charName:'Chunt Please', description:'Super cool shapeshifter', health: '10', mana: '10', role:'Wizard', abilities:[{Name:'Scraw',Description:'Yell!'},{Name:'Blink',Description:'Fade'}],inventory:[{Name:'Rock & Roll',Description:'Rock On'},{Name:'Bowling',Description:'Need Ball'}]},
        {id: '3', charName:'Carnival Wilson', description:'I guess Arnie is ok', health: '10', mana: '10', role:'Doctor', abilities:[{Name:'!!!Scream',Description:'!!!Yell Loud!'},{Name:'!!!Blank',Description:'!!!Disappear'}],inventory:[{Name:'!!!Rock',Description:'!!!Is Rock'},{Name:'!!!Bowl',Description:'!!!Bowl'}]} 
    ]
}


const charReducer =(state = initState, action) => {
    switch (action.type){
        case 'CREATE_CHAR':
            //console.log('created quest', action.chars)
            return state;
        case 'CREATE_CHAR_ERR':
            //console.log('create quest error', action.err)
            return state;
        default:
            return state;
    }
}

export default charReducer