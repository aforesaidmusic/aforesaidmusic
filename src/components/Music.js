/*Styles*/
import '../styles/Music.scss';
/*Necessary Imports*/
import React from 'react'

function Music(props) {

    return (
        <main class="section-music">
            <h2 class="music-header">MUSIC</h2>
            <ul class="music-list">
                {props.musicList.map(element =>
                    <li class="music">
                        <img class="cover" src={element.image} alt={element.imageDescription} />
                        <h3 class="music-title">{element.name}</h3>
                        <button class="music-listen" onClick={() => {
                            props.setClickedMusic(element)
                            props.setAsideDisplay(true)
                        }}>LISTEN NOW</button>
                    </li>
                )}
            </ul>
        </main>
    )
}

export default Music