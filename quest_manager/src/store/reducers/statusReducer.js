const initState = {
    editMode: false
}

const authReducer =(state = initState, action) => {
    switch(action.type){
        case 'TRUE EDIT MODE':
            return {
                ...state,
                editMode:true
            }
        case 'FALSE EDIT MODE':
            return {
                ...state,
                editMode:false
            }
        default:
            return state;
    }
}

export default authReducer