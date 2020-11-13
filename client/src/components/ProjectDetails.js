import { Component } from 'react';
import {get,addTime} from "../services/ProjectService";


class ProjectDetails extends Component{

    constructor(props)
    {    
        super(props);
        this.state= {
         project:{
           times:[]
         },
         totalHours: 0,
         displayAddTime: false,
         timeDescription: '',
         timeHours: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }  

    componentDidMount()
    {
      const url ='http://localhost:3000/projects/'+ this.props.history.location.id;
      get(url).then(
        (res) => {
          this.setState({project:res});
          let hours=0;
          if(!!this.state.project.times)
          {
          this.state.project.times.map(x => {
          hours+=x.hours
         });
         this.setState({totalHours:hours});
        }
         });
         
    }
    
    showHideAddHoursForm(){
      this.setState({displayAddTime: !this.state.displayAddTime});
    }

    saveTime(){
      this.showHideAddHoursForm();
      
      const url ='http://localhost:3000/times';
      const model = {
        description: this.state.timeDescription,
        hours: parseInt(this.state.timeHours),
        projectId: this.state.project.id
      };
        addTime(url,model).then(
        (res) => {
          this.setState({project:res});
          let hours=0;
          if(!!this.state.project.times){
         this.state.project.times.map(x=>{
          hours+= parseInt(x.hours)
         });
         this.setState({totalHours:hours});
        }
        
         });
    
    }

    deleteTime(){
      
    }

    handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
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
                  <tr>
                    <td></td>
                    <td>{this.state.project.name}</td>
                    <td>{this.state.project.description}</td>   
                    <td>{this.state.totalHours}</td>            
                  </tr>
                </tbody>
            </table>
            <button className="addButton btn" onClick={() => this.showHideAddHoursForm()} >Add hours</button>
                {this.state.displayAddTime && <div>
                 Description <input name="timeDescription" value={this.state.timeDescription}  onChange={this.handleInputChange}></input>
                 Hours <input type="numbers" name="timeHours" value={this.state.timeHours}  onChange={this.handleInputChange}></input>
                 <button className="addButton" onClick={() => this.saveTime()}>Save time</button>
                  </div>}
            <h2>Times</h2>
            <table>
                <thead>
                    <tr>                        
                        <th>Description</th>   
                        <th>Hours</th>  
                        <th>Action</th>
                    </tr>                                      
                </thead>
                <tbody>
                
                {this.state.project.times.map((time,index) => {
                  return (
                    <tr key={index}>
                      <td>{time.description}</td>
                      <td>{time.hours}</td>
                      <td><button onClick={() => this.deleteTime(time.id)}>Delete</button></td>
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