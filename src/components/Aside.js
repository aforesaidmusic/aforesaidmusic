/*Styles*/
import '../styles/Aside.scss';
/*Icons*/
import { IoCloseSharp } from "react-icons/io5";
/*Images*/
import spotifyLogo from '../pictures/spotifylogo.png'
import amazonmusicLogo from '../pictures/amazonmusiclogo.png'
import applemusicLogo from '../pictures/applemusiclogo.png'
import deezerLogo from '../pictures/deezerlogo.png'
import youtubeLogo from '../pictures/youtubelogo.png'
/*Necessary Imports*/
import { useEffect, useRef } from "react";

function Aside(props) {
  const newRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mouseup", handleOutsideClick);
    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      props.setAsideDisplay(false);
      props.setClickedMusic({});
    }
  };

  return (
    <aside class="section-aside">
      {props.asideDisplay &&
        <>
          <div class="aside-container" ref={newRef}>
            <span class="aside-close" onClick={() => {
              props.setAsideDisplay(false);
              props.setClickedMusic({});
            }}>
              <IoCloseSharp />
            </span>

            <div class="aside-header-container">
              <img class="aside-header-image" src={props.clickedMusic.image} style={{ width: "100%" }} alt={props.clickedMusic.imageDescription} />
              <title class="aside-header-title">{props.clickedMusic.name}<span class="title-type">{props.clickedMusic.type}</span></title>
            </div>

            <ul class='aside-links'>
              <li class='link'>
                <a class="platform-link" href={props.clickedMusic.link.spotify} target='_blank' rel="noreferrer">
                  <img class="platform-logo" src={spotifyLogo} alt="spotify's logo" />
                  <button class="button-play">PLAY</button>
                </a>
              </li>
              <li class='link'>
                <a class="platform-link" href={props.clickedMusic.link.applemusic} target='_blank' rel="noreferrer">
                  <img class="platform-logo" src={applemusicLogo} alt="applemusic's logo" />
                  <button class="button-play">PLAY</button>
                </a>
              </li>
              <li class='link'>
                <a class="platform-link" href={props.clickedMusic.link.amazonmusic} target='_blank' rel="noreferrer">
                  <img class="platform-logo" src={amazonmusicLogo} alt="amazonmusic's logo" />
                  <button class="button-play">PLAY</button>
                </a>
              </li>
              <li class='link'>
                <a class="platform-link" href={props.clickedMusic.link.youtubemusic} target='_blank' rel="noreferrer">
                  <img class="platform-logo" src={youtubeLogo} alt="youtube's logo" />
                  <button class="button-play">PLAY</button>
                </a>
              </li>
              <li class='link'>
                <a class="platform-link" href={props.clickedMusic.link.deezer} target='_blank' rel="noreferrer">
                  <img class="platform-logo" src={deezerLogo} alt="deezer's logo" />
                  <button class="button-play">PLAY</button>
                </a>
              </li>
            </ul>
          </div>
          <div class="background-blur"></div>
        </>
      }
    </aside>

  )
}

export default Aside