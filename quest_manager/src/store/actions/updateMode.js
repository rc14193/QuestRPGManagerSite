export const updateMode= (mode) => {
    if (mode===true){
        return {
            type: 'FALSE EDIT MODE',
        }
    }
    else if (mode===false){
        return {
            type: 'TRUE EDIT MODE',
        }
    }
    
}