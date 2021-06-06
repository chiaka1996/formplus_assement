const filteredCategory = (state=[], action) => {

    switch(action.type){
        case 'FILTEREDBYCATEGORY':
            return [...action.payload]

            default:
                return state
    }
}

export default filteredCategory;