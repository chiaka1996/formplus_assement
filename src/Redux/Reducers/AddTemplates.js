export const AddTemplate = (state=[], action) => {

    switch(action.type){
        case 'ADDTEMPLATE':
            return [
                ...action.payload
            ]

            default:
                return state
    }
}

export default AddTemplate;

