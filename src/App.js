import React, { useState, useEffect} from "react";
import axios from 'axios';
import DisplayMusic from "./DisplayMusic/DisplayMusic";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
      getAllSongs();
    }, [])

    async function getAllSongs() {
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
      setSongs(response.data)
      console.log(response.data)
    }
    // const searchSong = async(searchTerm) => {
    //   let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music' + (searchTerm));
    //   setSearch(response.data)
    // }
    function searchSong(searchTerm) {
      if (searchTerm.includes(songs.title)) {
        setSearch(songs)
        console.log(songs)
      }
    }
    return (
      <div>
        <Router>
          <NavBar searchSong={searchSong}/>
          <Routes><Route path="/" element={<DisplayMusic music={songs}/>}/></Routes>
          
        </Router>
      </div>
    )
}

export default App;
