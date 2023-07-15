import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./header.css";
// import { Link } from "react-router-dom";
import img from "../Images/you.jpg";
import log from "../Images/logo1.jpg"
import { Avatar } from "@material-ui/core";

function Header(){

    const[inputSearch, setInputSearch] = useState("");

    return(
        <div className="header">
            <div className="header-left">
                <MenuIcon style={{fontSize: 28}} className="header-icon" />
                {/* <Link to="/" > */}
                    <img src={img} alt="logo" className="header-logo" />
                    {/* </Link> */}
            </div>

            <div className="header-mid">
                <input onChange={(e)=>{setInputSearch(e.target.value)}} value={inputSearch} type="text" placeholder="Search" />
                {/* <Link to={`/search/${inputSearch}`} className="header-input-icon"> */}
                    <SearchIcon className="search-icon"/>
                {/* </Link> */}
                <MicIcon className="mic-icon header-icon" />
            </div>

            <div className="header-right">
                <VideocamIcon style={{fontSize:28}} className="header-icon" />
                <NotificationsIcon style={{fontSize:28}} className="header-icon" />
                <Avatar alt="avatar" src={log} className="header-avatar" />
            </div>
        </div>
    )
}

export default Header;