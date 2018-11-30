import React, { Component } from 'react';
import BrowserDetection from 'react-browser-detection';
import { Bounce } from 'react-motions'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoGithub, IoLogoPython, IoMdArrowDropdown } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import profile from './profile_img.png';
import './Intro.scss';


const browserHandler = {
  ie: () => {
    alert('이 페이지는 Chrome Browser 에 최적화 되어있습니다.\nChrome Browser 다운로드 페이지로 이동합니다.');
    window.location.href="https://www.google.co.kr/chrome/index.html";
  },
  default: () => <div></div>
}


class Intro extends Component {

  render() {
    return (
      <div className="Intro">
        <BrowserDetection>
          { browserHandler }
        </BrowserDetection>
        <header className="Intro-header">
          <Bounce infinite duration={1.5}>
            <div className="click-btn">Click<br/><IoMdArrowDropdown /></div>
          </Bounce>
          <p>
            <a href="/nasa" ><img src={profile} className="Intro-logo" alt="logo" /></a>
          </p>
          <p>
            CodeReading
          </p>
          <p>
            강용석 / 1988년생 / FE Developer<br/>
          </p>
          <div>
            <ul>
              <li><IoLogoHtml5 /></li>
              <li><IoLogoCss3 /></li>
              <li><IoLogoJavascript /></li>
              <li><FaReact /></li>
              <li><IoLogoGithub /></li>
              <li><IoLogoPython /></li>
            </ul>
          </div>
          
        </header>
      </div>
    );
  }
}

export default Intro;
