import React, {useEffect} from "react";
import Navigation from "./Components/Navigation";
import Templates from "./Components/Templates";
import Pagination from "./Components/Pagination";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {addTemplate,filteredTemplate,filteredTemplate2,filteredByCategory} from './Redux/Actions';
import './SCSS/App.scss';


function App() {

  const dispatch = useDispatch();
  const allTemplates = useSelector(state => state.AddTemplates); 

   //get templates fro the Api
   const sendGetRequest = async () => {
    try{
      const response = await axios.get('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates');
       const {data} = response;
       console.log(allTemplates);
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
      {allTemplates.length < 1 ? <div className="loader_container">
        <div className="loader"></div>
        <div className="please">Please wait!!!</div>
          </div> :
      <div>
      <Navigation />
      <Templates />
     <Pagination />
     </div>
    }   
    </div>
  );
}

export default App;
