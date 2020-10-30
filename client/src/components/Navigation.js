import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation(props)
{

    return (        
        <nav>
            <ul>
            <li><NavLink to='/'>Main Page</NavLink></li>
            <li><NavLink to='/project'>Project Page</NavLink></li>   
            </ul>
        </nav>   
    );
}
export default Navigation;