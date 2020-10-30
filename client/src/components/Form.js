import React, {useState} from 'react';

export default function Form(props)
{

const [name,setName] = useState('');

function handleChange(e)
{
    setName(e.target.value);
    console.log(e.target.value);
}

function handleSubmit(e)
{
    e.preventDefault();
    props.addProject(name);
    setName("");
}


return (
        <div className ="formClass">
        <form onSubmit={handleSubmit}>
        <h2 className="app">Add a project</h2>
        <p>Project Name</p>
        <input
          type="text"
          id="new-project"
          autoComplete="off"
          name="nameProject"
          value={name}
          onChange={handleChange}     
        />
        <p>Description</p>
        <textarea
          className="app"  
          type="text"
          id="new-description"
          name="description"
          autoComplete="off"
          onChange={handleChange}     
        >
        </textarea>
        <p>Time</p>
        <input
          type="text"
          id="new-time"
          autoComplete="off"     
        />
        <p></p>
        <button type="submit"className="btnSubmit">Add Project</button>
        </form>
        </div>

      
)
}


