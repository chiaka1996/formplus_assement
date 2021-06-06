import React, {useState, useEffect} from 'react';
import '../SCSS/Pagination.scss';
import {useSelector, useDispatch } from 'react-redux';
import {templatePerPage } from '../Redux/Actions';


const Pagination = () => {
    const dispatch = useDispatch();
    const allTemplates = useSelector(state => state.AddTemplates);
    const filteredTemplates = useSelector(state => state.FilteredTemplates);
    //const category = useSelector(state => state.Category);
    
    const [postPerPage] = useState(1000);
    const [currentPage, setCurrentPage] = useState(1);
    
    //splitting the templates into several pages
    const totalPages = Math.ceil(filteredTemplates.length / postPerPage);
    const indexOfLastTemplates = currentPage * postPerPage;
    const indexOfFirstTemplates = indexOfLastTemplates - postPerPage;
    const currentPost = filteredTemplates.slice(indexOfFirstTemplates, indexOfLastTemplates);

    const incrementPage = () => {
        currentPage === totalPages ? setCurrentPage(totalPages) : setCurrentPage(()=>currentPage+1);
    };

    const decrementPage = () => {
        currentPage > 1 ? setCurrentPage(()=>currentPage-1) : setCurrentPage(1); 
    }

    useEffect(() => {
        dispatch(templatePerPage (currentPost));
      },[currentPage, allTemplates,filteredTemplates])
    
    return (
        <div className="pagination">
            <span className="previous" onClick={decrementPage}>Previous</span>
            <div className="numbers"><span className="one">{currentPage}</span> of {totalPages} </div>
            <div className="next" onClick={incrementPage}>Next <div className="arrow">&#62;</div></div>
        </div>
    )
}

export default Pagination;