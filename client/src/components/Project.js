import React , {Component} from 'react';
import projectServices from '../services/project.services';
class Project extends Component
{
       constructor(props)
       {    
           super(props);
           this.state= {
            users:[]

       }}

          componentDidMount()
          {
            fetch('http://localhost:3000/projects')
            .then(response => response.json())
            .then(res => {
                debugger;
              if(res) 
              { 

                this.setState({users:[...this.state.users, ...res]})
              }
            });
          }     
  
    render()
    {
    return(
        <div>
        <p>List of projects</p>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>                                      
                </thead>
                <tbody>
                {this.state.users.map(( listValue, index ) => {
                return (
            <tr key={index}>
              <td>{listValue.id}</td>
              <td>{listValue.name}</td>
              <td>{listValue.description}</td>
            </tr>
          );
        })}
            </tbody>
            </table>

        
        </div>
    );
    }
}
export default Project;    