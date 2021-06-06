const changeOrder = (state='Default', action) => {

    switch(action.type){
        case 'CHANGEORDER':
            return action.payload;

            default:
                return state
    }
}

export default changeOrder;