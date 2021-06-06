import React from 'react';
import "../SCSS/Navigation.scss";
import {useSelector, useDispatch } from 'react-redux';
import {changeCategory,
        filteredTemplate,changeOrder, changeDate, sortByOrder, sortByDate,
        changeSearchInput,searchInputFilter, filteredByCategory } from '../Redux/Actions';



const Navigation = () => {
    const dispatch = useDispatch();
    const allTemplates = useSelector(state => state.AddTemplates);
    const order = useSelector(state => state.Order);
    const date = useSelector(state => state.Date);
    const filteredTemplate2 = useSelector(state => state.FilteredTemplates2)
    // const filteredTemplates = useSelector(state => state.FilteredTemplates)
    const category = useSelector(state => state.Category);
    const searchText = useSelector(state => state.SearchInput);
    const FilteredCategory = useSelector(state => state.FilteredCategory)

    const searchInput = (e) => {
        const value = e.target.value;
        dispatch(changeSearchInput(value));
        dispatch(searchInputFilter(value,FilteredCategory))

    }


    const changeCategoryValue = (e) => {
        const value = e.target.value;
        dispatch(changeDate('Default'))
        dispatch(changeOrder('Default'));
        dispatch(changeCategory(value))
        dispatch(changeSearchInput(''));
        if(value === 'All') {       
            dispatch(filteredTemplate(allTemplates))
        }
        else {
            const result = allTemplates.filter( template => template.category.includes(value))
            dispatch(filteredTemplate(result))
            dispatch(filteredByCategory(result))
            
        }
    }

   const changeOrderValue = (e) => {
        const value = e.target.value;
        dispatch(changeDate('Default'))
        dispatch(changeOrder(value));
        dispatch(sortByDate('Default', filteredTemplate2))
        dispatch(sortByOrder(value,filteredTemplate2));
   }

   const changeDateValue = (e) => {
       const value = e.target.value
       dispatch(changeOrder('Default'))
       dispatch(changeDate(value))
       dispatch(sortByOrder('Default',filteredTemplate2));
       dispatch(sortByDate(value, filteredTemplate2))
   }


    return (
        <div className="navContainer">
            <form className="navigationForm">
                <div className="searchInputDiv">
                <input type="text" placeholder="search template" value={searchText} onChange={(e) => searchInput(e)} value={searchText}/>
                </div>

                <div className="flex"></div>

                <div className="sortBy">sort by:</div>

               <div className="category">
                   <div>Category</div>
                   <select onChange={(e)=>changeCategoryValue(e)} value={category}>
                     <option value="All">All</option>
                     <option value="E-commerce">E-commerce</option>
                     <option value="Health">Health</option>
                     <option value="Education">Education</option>

                   </select>
               </div>

               <div className="order">
                   <div>Order</div>
                   <select onChange={(e) => changeOrderValue(e)} value={order}>
                       <option value="Default">Default</option>
                       <option value="ascending">ascending</option>
                       <option value="descending">descending</option>
                   </select>
               </div>

               <div className="date">
                   <div>Date</div>
                   <select onChange={(e) => changeDateValue(e)} value={date}>
                       <option value="Default">Default</option>
                       <option value="ascending">ascending</option>
                       <option value="descending">descending</option>
                   </select>
               </div>
            </form>
        </div>
    )
}

export default Navigation;