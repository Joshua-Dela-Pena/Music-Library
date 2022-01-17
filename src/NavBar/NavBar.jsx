import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "./NavBar.css"



const NavBar = (props) => {
    
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchSong(searchTerm)
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    
    return ( 
        <div className='homeButton'>
            <div>
                <Link to="/"> Home </Link>
                <Link to="/CreateSong"> Add Song </Link>
            </div>
            <form onSubmit={handleSubmit} className='form-grid'>
                <div className='form-group'>
                    <input type="searchTerm" value={searchTerm} name="searchTerm" className="form-control" onChange={handleChange} />
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
     );
}
 
export default NavBar;