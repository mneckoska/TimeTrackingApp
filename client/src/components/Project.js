import React, { Component } from "react";
import { get, deleteProject } from "../services/ProjectService";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isFormVisible: false,
    };
    this.addNewProject = this.addNewProject.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteProject1 = this.deleteProject1.bind(this);
  }
  addNewProject() {
    this.props.history.push({ pathname: "/manage-projects" });
  }

  handleClick(item) {
    this.props.history.push({ pathname: "/project", id: item.id });
  }

  updateProject(item) {
    this.props.history.push({ pathname: "/manage-projects", project: item });
  }

  deleteProject1(item) {
    const url = "http://localhost:3000/projects/" + item.id;
    deleteProject(url).then((remainingProjects) => {
      this.setState({ projects: remainingProjects });
    });
  }

  componentDidMount() {
    get("http://localhost:3000/projects").then((res) => {
      this.setState({ projects: [...this.state.projects, ...res] });
    });
  }

  toggleModal = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    });
  };

  render() {
    return (
      <div>
        <h2>List of projects</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Actions</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.projects.map((listValue, index) => {
              return (
                <tr key={index}>
                  <td>{listValue.id}</td>
                  <td>{listValue.name}</td>
                  <td>{listValue.description}</td>
                  <td>
                    <button
                      className="btnActions"
                      onClick={() => this.handleClick(listValue)}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnActions"
                      onClick={() => this.updateProject(listValue)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnActions"
                      onClick={() => this.deleteProject1(listValue)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p></p>

        <button className="addButton" onClick={() => this.addNewProject()}>
          Add project
        </button>
      </div>
    );
  }
}
export default Project;
