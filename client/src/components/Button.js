import React ,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams
  } from 'react-router-dom'
import ProjectDetails from './ProjectDetails';


export default function Button(props)
{

  const [formVisibility, setFormVisibility] = useState(false);
     
    const {id} = useParams();
      const history = useHistory();
      function viewProject(props)
      {
        debugger;
          history.push('/project');          

      }   
      
      function updateProject()
      {

      }
    return(

        <td><button className="btnActions" onClick={viewProject}>View</button>
              <button onClick={() => setFormVisibility({ formVisibility: true })}>Update</button>
              {formVisibility ? <Form/> : null }              
              <button>Delete</button></td>
    )
}
