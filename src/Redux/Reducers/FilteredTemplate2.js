const filteredTemplate2 = (state=[], action) => {

    switch(action.type){
        case 'FILTEREDTEMPLATE2':
            return [...action.payload]

            default:
                return state
    }
}

export default filteredTemplate2;