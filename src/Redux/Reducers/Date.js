const changeDate = (state='Default', action) => {

    switch(action.type){
        case 'CHANGEDATE':
            return  action.payload;

            default:
                return state
    }
}

export default changeDate;