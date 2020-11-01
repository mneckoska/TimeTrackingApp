import React from "react";
import { addProject, updateProject } from "../services/ProjectService";

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    const project = this.props.history.location.project ||
     {
      name: "",
      description: ""
    };
    this.state = project;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.id) {
      console.log("Create new project...", this.state);
      addProject("http://localhost:3000/projects", this.state).then(
        (newProject) => {
        
          this.props.history.push({pathname: '/' });     
        }
      );
    } else {
      console.log("Update existing project", this.state);
      updateProject("http://localhost:3000/projects", this.state).then(
        (updatedProject) => {
          this.props.history.push({pathname: '/'});     
        }
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
