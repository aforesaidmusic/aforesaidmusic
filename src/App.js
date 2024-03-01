/*Styles*/
import './style.scss';
/*Components*/
import Footer from './components/Footer';
import Lyrics from './components/Lyrics';
import Aside from './components/Aside';
import Music from './components/Music';
/*Images*/
import stalkerforbackground from "./pictures/stalkerforbackground.jpg"
/*Necessary Imports*/
import React, { useState } from 'react';
import musicArray from './data/MusicList';

function App() {
  const [clickedMusic, setClickedMusic] = useState({});
  const [asideDisplay, setAsideDisplay] = useState(false)
  const [musicList, setMusicList] = useState(musicArray)

  return (
    <div className="App" >

      <header class="section-header" >
        <h1 class="main-header">AFORESAID</h1>
        <img
          class="background-image"
          src={stalkerforbackground}
          alt="An artwork from Aforesaid's single"
        />
      </header>

      <Music
        musicList={musicList}
        setClickedMusic={setClickedMusic}
        setAsideDisplay={setAsideDisplay}
      />
      <Lyrics />
      <Aside
        clickedMusic={clickedMusic}
        asideDisplay={asideDisplay}
        setClickedMusic={setClickedMusic}
        setAsideDisplay={setAsideDisplay}
      />
      <Footer />
    </div>
  );
}

export default App;
