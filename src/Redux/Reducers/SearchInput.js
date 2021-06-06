const searchInput = (state='', action) => {

    switch(action.type){
        case 'CHANGESEARCHINPUT':
            return action.payload;

            default:
                return state
    }
}

export default searchInput;