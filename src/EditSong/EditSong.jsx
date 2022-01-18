import { React, useState}  from 'react';

const EditSong = (props) => {

    const[title, setTitle] = useState('')
    const[genre, setGenre] = useState('')
    const[album, setAlbum] = useState('')
    const[release_date, setReleaseDate] = useState('')
    const[artist, setArtist] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.editSong({title, genre, album, release_date, artist})
    }
    return ( 
        <div>
            <form>
            <div><label> Album <input type="album" name="album" /></label></div>
            <div><label> Genre <input type="genre" name="genre" value={genre}/></label></div>
            <div><label> Artist <input type="artist" name="artist" value={artist}/></label></div>
            <div><label> Release Date <input type="release_date" name="release_date" value={release_date}/></label></div>
            <div><label> Title <input type="title" name="title" value={title}/></label></div>
            <button type="submit"> Edit Song </button>
            </form>
        </div>
     );
}
 
export default EditSong;