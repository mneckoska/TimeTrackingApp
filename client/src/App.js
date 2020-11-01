import './App.css';
import React , {Component} from 'react';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import FormComponent from './components/ProjectForm';
 
class App extends Component {  

  render () {

    return    (

    

<BrowserRouter>
    <div className="app">
    <h1>Simple Time Tracking Application</h1>
      <Navigation/>
        <Switch>
            <Route exact path='/' component={Project}></Route>
            <Route exact path='/project' component={ProjectDetails}></Route> 
            <Route exact path='/manage-projects'  component={FormComponent}></Route>          
        </Switch>
        </div>
    </BrowserRouter>    

    
  );
}
}

export default App;
