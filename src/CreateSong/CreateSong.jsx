import React, { useState } from "react";


const CreateSong = (props) => {

    const[title, setTitle] = useState('')
    const[genre, setGenre] = useState('')
    const[album, setAlbum] = useState('')
    const[release_date, setReleaseDate] = useState('')
    const[artist, setArtist] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addSong(title, genre, album, release_date, artist)
    }

    const handleChange1 = (event) => {
        setTitle(event.target.value)
        
    }

    const handleChange2 = (event) => {
        setGenre(event.target.value)
    }

    const handleChange3 = (event) => {
        setAlbum(event.target.value)
    }
    
    const handleChange4 = (event) => {
        setArtist(event.target.value)
    }
    
    const handleChange5 = (event) => {
        setReleaseDate(event.target.value)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add Song</label>
                    <input onChange={handleChange1} type="title" name="title" value={title}/>
                    <input onChange={handleChange2} type="genre" name="genre" value={genre}/>
                    <input onChange={handleChange3} type="album" name="album" value={album}/>
                    <input onChange={handleChange4} type="artist" name="artist" value={artist}/>
                    <input onChange={handleChange5} type="release_date" name="release_date" value={release_date}/>
                    
            </form>
        </div>
     );
}
 
export default CreateSong;