import React, {useEffect} from "react";
import Navigation from "./Components/Navigation";
import Templates from "./Components/Templates";
import Pagination from "./Components/Pagination";
import axios from "axios";
import {useDispatch} from 'react-redux';
import {addTemplate,filteredTemplate,filteredTemplate2,filteredByCategory} from './Redux/Actions';
import './SCSS/App.scss';


function App() {

  const dispatch = useDispatch();

   //get templates fro the Api
   const sendGetRequest = async () => {
    try{
      const response = await axios.get('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates');
       const {data} = response;
       dispatch(addTemplate(data));
      dispatch(filteredTemplate(data))
      dispatch(filteredTemplate2(data))
      dispatch(filteredByCategory(data))
    }
    catch (error){
      throw error 
    }
  }

  useEffect(() => {
    sendGetRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="App">
      <Navigation />
       <Templates />
      <Pagination />
    </div>
  );
}

export default App;
