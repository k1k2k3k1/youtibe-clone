import React from "react";
import { Avatar } from "@material-ui/core";
import "./videocard.css";

function VideoCard({...props}){

    return(
        <div className="videoCard">
            <img src={props.image} className="videoCard-image" alt="content-img" />
            <div className="videoCaed-info">
                <Avatar className="videoCard-avatar" alt={props.channel} src={props.channelImage} /><h4>{props.title}</h4>
                <div className="video-text">
                    <p>{props.channel}</p>
                    <p>{props.views} . {props.timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;