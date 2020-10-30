import React , {Component} from 'react';
import Form from './Form';
import Button from './Button';

class Project extends Component
{
       constructor(props)
       {    
           super(props);
           this.state= {
            projects:[],
            isFormVisible : false
                    
       }
       this.addProject=this.addProject.bind(this);
      // this.viewFunction=this.viewFunction.bind(this); 
      }                      
      addProject()
      {

      }   

      componentDidMount()
      {
            fetch('http://localhost:3000/projects')
            .then(response => response.json())
            .then(res => {
              if(res) 
              { 

                this.setState({projects:[...this.state.projects, ...res]})
              }
            });
      }
          
            
    render()
    {
    return(
        <div>
          <h2>List of projects</h2>
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
                {this.state.projects.map(( listValue, index ) => {
                return (
            <tr key={index}>
              <td>{listValue.id}</td>
              <td>{listValue.name}</td>
              <td>{listValue.description}</td>
              <td><Button /></td>
            </tr>
            
          );
        })}
            </tbody>
            </table>
        <p></p>
        <button className="addButton" onClick={() => this.setState({ isFormVisible: true })}>Add project</button>
        { this.state.isFormVisible ? <Form/> : null }
        </div>
    );
    }
}
export default Project;    