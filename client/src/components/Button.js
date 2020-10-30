import React ,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams
  } from 'react-router-dom'


export default function Button(props)
{

    const [formVisibility,setFormVisibility]= useState(false);
   
    
    const {id} = useParams();
      const history = useHistory();
      function viewProject()
      {
          history.push('/project');          

      }   
      
      function updateProject()
      {

      }
    return(

        <td><button className="btnActions" onClick={viewProject}>View</button>
              <button onClick={() => this.setFormVisibility({ formVisibility: true })}>Update</button>
              { this.setFormVisibility.formVisibility ? <Form/> : null }
              <button>Delete</button></td>
    )
}
