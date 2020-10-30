import { Component } from 'react';
import React from 'react-dom';

class ProjectDetails extends Component{

    constructor(props)
    {    
        super(props);
        this.state= {
         projects:[]
        }
    }  
    
    componentDidMount()
    {
        fetch('http://localhost:3000/projects/id',
        {
          mode: 'no-cors',
        })
         .then(response => response.json())
         .then(res => {
        if(res) 
        { 

          this.setState({projects:[this.state.projects,res]})
        }
      });
    }    
    
    render()   
    {
        
    return(
        <div>
          <h2>Project Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Hours</th>
                    </tr>                                      
                </thead>
                <tbody>
                {this.state.projects.map(( listValue,index) => {
                return (
            <tr key={index}>
              <td>{listValue.name}</td>
              <td>{listValue.description}</td>
              
            </tr>
            
          );
        })}
            </tbody>
            </table>
            </div>
    )
    }
}
export default ProjectDetails;