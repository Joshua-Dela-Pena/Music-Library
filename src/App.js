import React, { useState, useEffect} from "react";
import axios from 'axios';


function App() {
  
    const [songs, setSongs] = useState([]);

    useEffect(() => {
      getAllSongs();
    }, [])

    async function getAllSongs() {
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/');
      setSongs(response.data)
    }
}

export default App;
