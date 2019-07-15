import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-default navbar-light bg-light navbar-fixed-top">
            <div className="container">
                <a href="/" className="navbar-brand">Memory Game</a>
                <div>{props.message}</div>
                <div>Score: {props.curScore} | High Score: {props.highScore}</div>
            </div>
        </nav>
    );
}

export default Navbar;