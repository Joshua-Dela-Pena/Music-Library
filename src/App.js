import React, { useState, useEffect} from "react";
import axios from 'axios';
import DisplayMusic from "./DisplayMusic/DisplayMusic";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SearchResults from "./SearchResults/SearchResults";
import CreateSong from "./CreateSong/CreateSong";

function App() {

    const [song, setSong] = useState({})
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
      getAllSongs();
    }, [])

    async function getAllSongs() {
      let response = await axios.get('http://127.0.0.1:8000/music/');
      setSongs(response.data)
      console.log(response.data)
    }
    
    async function deleteSong(id) {
      await axios.delete(`http://127.0.0.1:8000/music/${id}`)
      getAllSongs()
    }

    async function editSong(id) {
      await axios.put("http://127.0.0.1:8000/music/", id)
    }
    
    async function PostSong(id) {
      let newSong = {
        title: id.title,
        artist: id.artist,
        album: id.album,
        genre: id.genre,
        release_date: id.release_date
      }
      await axios.put("http://127.0.0.1:8000/music/", newSong)
    }

    const searchSong = (searchTerm) => {
      let filteredSongs = songs.filter((foundSong) => {
        if (foundSong.title.includes(searchTerm)) {
          return true
        }
        else 
          return false
        
      })
      setSongs(filteredSongs)
      console.log('song', song)
    }
    return (
      <div>
        <Router>
          <NavBar searchSong={searchSong}/>
          <Routes>
            <Route path="/" element={<DisplayMusic music={songs} delete={deleteSong} />}/>
            <Route path="/SearchResults" element={<SearchResults songFound={song} />}/>
            <Route path="/EditSong" element={<editSong song={song} />}/>
            <Route path="/CreateSong" element={<CreateSong addSong={PostSong} />}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App;
