import React from "react";
import './styling.css';

function Banner({ header }) {
    return (
        <div>
            <h1 className="banner-header">{header}</h1>
            <p>Click on the buttons to see the satellites in that orbit type</p>
        </div>
    );
}

export default Banner;
