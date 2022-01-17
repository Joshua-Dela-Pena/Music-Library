import React from 'react';
import "./DisplayMusic.css"

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
                        <td>{song.releaseDate}</td>
                        <td>{song.title}</td>
                        <button>Edit</button>
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