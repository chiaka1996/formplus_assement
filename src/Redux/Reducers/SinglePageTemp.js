const PerPageTemplate = (state=[], action) => {

    switch(action.type){
        case 'TEMPLATEPERPAGE':
            return [
                ...action.payload
            ]

            default:
                return state
    }
}

export default PerPageTemplate;