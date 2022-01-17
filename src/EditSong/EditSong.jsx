import React from 'react';

const EditSong = (props) => {
    return ( 
        <div>
            <input type="album" name="album" placeholder={props.song.album} ></input>
            <input type="genre" name="genre" placeholder={props.song.genre} ></input>
            <input type="artist" name="artist" placeholder={props.song.artist} ></input>
            <input type="release_date" name="release_date" placeholder={props.song.release_date} ></input>
            <input type="title" name="title" placeholder={props.song.title} ></input>
        </div>
     );
}
 
export default EditSong;