import React from "react";

function Header(props) {
    return (
        <div className="uk-section uk-light">
            <div className="uk-container uk-container-large uk-text-center">
                <h1>{props.h1}</h1>
                <h2>{props.h2}</h2>
            </div>
        </div>
    )
}

export default Header;