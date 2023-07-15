import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import  SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History"
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpOffAltIcon from "@material-ui/icons/ThumbUpAlt";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MovieIcon from "@material-ui/icons/Movie";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import CreateIcon from "@material-ui/icons/Create";
import ColorLensIcon from "@material-ui/icons/ColorLens";

import './sidebar.css';

function Sidebar(){

    return(
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={SlowMotionVideoIcon} title="Shorts" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
            <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked videos" />
            <hr/>
            <h4>Explore</h4>
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={MusicNoteIcon} title="Music" />
            <SidebarRow Icon={MovieIcon} title="Movies" />
            <SidebarRow Icon={RssFeedIcon} title="Live" />
            <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
            <SidebarRow Icon={AssignmentIcon} title="News" />
            <SidebarRow Icon={EmojiEventsIcon} title="Sports" />
            <SidebarRow Icon={CreateIcon} title="Learning" />
            <SidebarRow Icon={ColorLensIcon} title="Fashion & Beauty" />
            <hr/>
            <SidebarRow Icon={SettingsIcon} title="Settings" />
            <SidebarRow Icon={FlagIcon} title="Report history" />
            <SidebarRow Icon={HelpIcon} title="Help" />
            <SidebarRow Icon={FeedbackIcon} title="Send feedback" />
            <hr/>
            <div className="sidebar-creator">
                <h4>Created by</h4>
                <p>About Press Copyright Contact us Creators Advertise Developers Terms</p>
            </div>
        </div>
    )
}

export default Sidebar;