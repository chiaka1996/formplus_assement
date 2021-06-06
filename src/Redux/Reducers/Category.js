const changeCategory = (state='All', action) => {

    switch(action.type){
        case 'CHANGECATEGORY':
            return action.payload;

            default:
                return state
    }
}

export default changeCategory;