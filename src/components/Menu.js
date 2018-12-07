import React from 'react';
import { NavLink } from  'react-router-dom';
import './Menu.scss';

const Menu = ({onClick}) => {
    const activeStyle = {
        background: '#eeeeee',
        color:'#333333'
    }

    return (
        <>
            <h3 className="menu-title">Portfolio List</h3>
            <ul className="menu">
                <li><NavLink exact to="/nasa" activeStyle={activeStyle} onClick={onClick}>Nasa API</NavLink></li>
                <li><NavLink exact to="/todo" activeStyle={activeStyle} onClick={onClick}>Todo App</NavLink></li>
                <li><NavLink exact to="/movie" activeStyle={activeStyle} onClick={onClick}>Movie App</NavLink></li>
                <li><NavLink exact to="/wedding" activeStyle={activeStyle} onClick={onClick}>Wedding CARD</NavLink></li>
            </ul>
        </>
    );
};

export default Menu;