import React from "react";
import "./searchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
// import ChannelRow from "./ChannelRow";
// import ChannelVIdeo from "./ChannelVideo";

function SearchPage(){

    return(
        <div className="searchPage">
            <div className="searchPage-filter">
                <TuneIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>


        </div>
    )
}

export default SearchPage;