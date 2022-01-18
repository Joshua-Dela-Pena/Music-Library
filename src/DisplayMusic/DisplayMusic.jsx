import React from 'react';
import "./DisplayMusic.css"
import { Link } from 'react-router-dom';


const DisplayMusic = (props) => {
    return ( 
    <div>
        <table>
            <thead>
                <tr>
                    <td>Album</td>
                    <td>Genre</td>
                    <td>Artist</td>
                    <td>ID</td>
                    <td>Release Date</td>
                    <td>Title</td>
                </tr>
            </thead>
                <tbody>
            {props.music.map((song) =>{
                return (
                    <tr key={song.id}>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.artist}</td>
                        <td>{song.id}</td>
                        <td>{song.release_date}</td>
                        <td>{song.title}</td>
                        <Link to="/EditSong"> Edit </Link>
                        <button onClick={() => props.delete(song.id)}>Delete</button>
                    </tr>
                    )
                })}
                
                </tbody>
        </table>
    </div>
     );
}
 
export default DisplayMusic;