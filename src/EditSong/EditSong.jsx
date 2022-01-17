import React from 'react';

const EditSong = (props) => {
    return ( 
        <input type="searchTerm" value={searchTerm} name="searchTerm" className="form-control" onChange={handleChange}></input>
     );
}
 
export default EditSong;