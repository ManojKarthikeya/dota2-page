import React from "react";
import "./header.styles.scss";
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header-container">
        <Link to="/" className="dota-logo"/>
        <div className="tabs">
            <div className="game-tab-button">GAME</div>
            <Link to="/heros" className="option">HEROS</Link>
            <Link to="/news" className="option">NEWS</Link>
            <Link to="/esports" className="option">ESPORTS</Link>
        </div>
    </div>
);

export default Header;