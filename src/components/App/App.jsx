import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from './GalleryList/GalleryList';

function App() {

  const [galleryData, setGalleryData] = useState([])


      useEffect(() => {
        axios.get("http://localhost:5000/gallery")
        .then(res => setGalleryData(res.data))
        .catch(err => console.log(err))
      }, [])


    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
          <GalleryList galleryData={galleryData}/>
      </div>
    );
}

export default App;
