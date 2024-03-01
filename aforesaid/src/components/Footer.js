/*Styles*/
import '../styles/Footer.scss';
/*Necessary Imports*/
import React from 'react'
import { BsSpotify, BsInstagram, BsFacebook, BsApple, BsYoutube, BsTiktok } from "react-icons/bs";

function Footer() {
  function handleFormSubmit(e) { e.preventDefault(); }

  return (
    <footer class="section-footer">
      <section class="footer-form">
        <form class="updates-form">
          <input class="form-email" type="email" placeholder='EMAIL ADDRESS' />
          <button class="form-submit" onClick={handleFormSubmit}>GET UPDATES</button>
        </form>
      </section>
      
      <section class="footer-socials">
        <ul class='socials-list'>
          <li class="social">
            <a class="social-icon" target="_blank" rel="noreferrer" href='https://open.spotify.com/artist/54vhiDclgzHGXELOkuaJw1?si=B3HvvyiCQB6EMY7XXpuR1w'><BsSpotify /></a>
          </li>
          <li class="social">
            <a class="social-icon" target="_blank" rel="noreferrer" href='https://www.instagram.com/aforesaid.music/'><BsInstagram /></a>
          </li>
          <li class="social">
            <a class="social-icon" target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=61556311102032'><BsFacebook /></a>
          </li>
          <li class="social">
            <a class="social-icon" target="_blank" rel="noreferrer" href='https://music.apple.com/gb/artist/aforesaid/1629863697'><BsApple /></a>
          </li>
          <li class="social">
            <a class="social-icon" target="_blank" rel="noreferrer" href='https://www.youtube.com/@Aforesaid'><BsYoutube /></a>
          </li>
          <li class="social">
            <a class="social-icon" target="_blank" rel="noreferrer" href='https://www.tiktok.com/@aforesaid.music'><BsTiktok /></a>
          </li>
        </ul>
      </section>

      <section class="footer-copyright">
        <p class="copyright-text">Aforesaid ©</p>
      </section>
    </footer>
  )
}

export default Footer