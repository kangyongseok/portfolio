import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { FaBloggerB, FaGithub, FaInstagram, FaFacebook, FaAlignJustify, FaExternalLinkAlt } from "react-icons/fa";
import { Nasa, Todo, Movie, Wedding } from '../pages/index';
import Menu from  '../components/Menu';
import './App.scss';


class App extends Component {

    state = {
        checked: false,
        link:false
    }

    handleMenuToggle = () => {
        const { checked } = this.state;
        this.setState({
            checked: !checked
        })
    }

    handleLinkToggle = () => {
        const { link } = this.state;
        this.setState({
            link: !link
        })
    }

    render() {
        const {handleMenuToggle, handleLinkToggle} = this;
        const { checked, link } = this.state;

        return (
            <>
                <div className="header-area">
                    <Header onClick={handleMenuToggle} onLink={handleLinkToggle} link={link} />
                </div>
                <div className="devision">
                    <div className={`menu-area ${checked ? 'menu-toggle' : ''}`}>
                        <Menu onClick={handleMenuToggle} />
                    </div>
                    <div className="contents-area">
                        <Route exact path="/nasa" component={Nasa}/>
                        <Route exact path="/todo" component={Todo}/>
                        <Route exact path="/movie" component={Movie}/>
                        <Route exact path="/wedding" component={Wedding}/>
                    </div>
                </div>
            </>
        );
    }
}

const Header = ({onClick, onLink, link}) => {

    return (
        <>
            <h1 className="logo-title">CodeReading</h1>
            <div className="util-area">
                <ul className={`${link ? 'link-toggle' : ''}`}>
                    <li><a href="http://code-reading.tistory.com/" ><FaBloggerB /> <span>Blog</span></a></li>
                    <li><a href="https://github.com/kangyongseok" ><FaGithub /> <span>Git</span></a></li>
                    <li><a href="https://www.instagram.com/yongseukgi/" ><FaInstagram /> <span>Instagram</span></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100014279233128" ><FaFacebook /> <span>Facebook</span></a></li>
                </ul>
            </div>
            <p className="tablet-menu" onClick={onClick}><FaAlignJustify /></p>
            <p className="link-menu" onClick={onLink}><FaExternalLinkAlt /></p>
        </>
    )
}

export default App;