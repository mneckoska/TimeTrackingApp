import './App.css';
import React , {Component} from 'react';
import Project from './components/Project';
 
class App extends Component {

 /* constructor(props)
  {
    super(props);
    this.state= {
      users:[]
    }
  }*/

  constructor(props)
  {
    super(props);
    
  }

  /*componentDidMount()
  {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(res => {
      if(res && res.data) 
      {
        this.setState({users:[...this.state.users, ...res.data]})
      }
    });
  }
  
  renderUsers()
  {
    if(this.state.users.length <=0)
    {
      return <div>Loading...</div>
    }

    else {
      return this.state.users.map((val,key) => {
        return <div key={key}>
          {val.name} | {val.age}
          <button>View</button>
          <button>Update</button>
          <button>Delete</button>
          <Project />

        </div>;
      })
    }
  }
  */

  render() {
  return (
    <div className="App">
      <Project/>
    </div>
  );
}
}
export default App;
