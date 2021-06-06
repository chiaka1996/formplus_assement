//add task template to state
export const addTemplate = (templates) => {
    return {
        type: 'ADDTEMPLATE',
        payload: templates
    }
}

//single page template using pagination
export const templatePerPage = (page) => {
    return {
        type: 'TEMPLATEPERPAGE',
        payload: page
    }
}

//change category state option
export const changeCategory = (category) => {
    return {
        type: 'CHANGECATEGORY',
        payload: category
    }
}

//template results filtered by category
export const filteredTemplate =  (filtered) => {
    return {
        type: 'FILTEREDTEMPLATE',
        payload: filtered
    }
}

//template results filtered by category2
export const filteredTemplate2 =  (filtered) => {
    return {
        type: 'FILTEREDTEMPLATE2',
        payload: filtered
    }
}

//setting order state
export const changeOrder = (order) => {
    return {
        type: 'CHANGEORDER',
        payload: order
    }
}

//setting Date state
export const changeDate = (date) => {
    return {
        type: 'CHANGEDATE',
        payload: date
    }
}

//setting search input state
export const changeSearchInput = (search) => {
    return {
        type: 'CHANGESEARCHINPUT',
        payload: search
    }
}


//sort by order in ascending or descending order
export const sortByOrder = (order, template) => {
    return {
        type: 'SORTTEMPLATEBYORDER',
        payload: order,
        payload2: template
    }
}

//soet by date in ascending or descending order
export const sortByDate = (date, template) => {
    return {
        type: 'SORTTEMPLATEBYDATE',
        payload: date,
        payload2: template
    }
}

//filter template by template name
export const searchInputFilter = (searchText,filteredTemplate) => {
    return {
        type: 'SEARCHINPUTFILTER',
        payload: searchText,
        payload2: filteredTemplate
    }
}

//filtered by category
export const filteredByCategory = (categoryFilter) => {
    return {
        type: 'FILTEREDBYCATEGORY',
        payload: categoryFilter
    }
}
