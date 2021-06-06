const filteredTemplate = (state=[], action) => {

    switch(action.type){
        case 'FILTEREDTEMPLATE':
            return [...action.payload]

         case 'SORTTEMPLATEBYORDER':
            if(action.payload === 'Default') {
                  return action.payload2 
            }

            if(action.payload === "ascending") {
                let sortState = [...state]
                sortState.sort((a,b) => {
                    let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
    
                    if (fa < fb) {
                        return -1;
                    } 
                    if (fa > fb) {
                        return 1; 
                    }
                    return 0;
            })
            return sortState
        }

        if(action.payload === "descending"){
            let sortState = [...state]
            sortState.sort((a,b) => {
                let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();

                if (fb < fa) {
                    return -1;
                }
                if (fb > fa) {
                    return 1;
                }
                return 0;
        })
        return sortState
        }
        break;

        case 'SORTTEMPLATEBYDATE':

             if(action.payload === 'Default') {
                    return action.payload2 
              }

              if(action.payload === 'ascending') {
                let sortState = [...state]
                sortState.sort((a, b) => {
                    let da = new Date(a.created),
                        db = new Date(b.created);
                    return da - db;
                });
                return sortState
              }

              if(action.payload ==='descending') {
                let sortState = [...state]
                sortState.sort((a, b) => {
                    let da = new Date(a.created),
                        db = new Date(b.created);
                    return db - da;
                });
                return sortState
              }
              break;

        case 'SEARCHINPUTFILTER':
            let search = action.payload === '' ? action.payload2 : state.filter(post =>  {
                    let name = post.name;
                    return name.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0 ;
            })

            return search

            default:
                return state
    }
}

export default filteredTemplate;