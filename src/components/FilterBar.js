import React from "react";
import "./filterBar.css";

function FilterBar(){

    return(
        <div className="filterBar">
            <ul>
                <li className="main">All</li>
                <li>Music</li>
                <li>Mixes</li>
                <li>Comedy</li>
                <li>Live</li>
                <li>Trailer</li>
                <li>Gyms</li>
                <li>Bollywood Music</li>
                <li>JavaScript</li>
                <li>Motivations</li>
                <li>Cooking Shows</li>
                <li>DJ Mix</li>
                <li>Hip Hop Dance</li>
                <li>Cricket</li>
            </ul>
        </div>
    )
}

export default FilterBar;