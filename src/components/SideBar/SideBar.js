import React from "react";
import SideBarRow from "./../SideBarRow/SideBarRow";
import "./SideBarRow.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Subscription from "@material-ui/icons/Subscritions";
import VideoLibraryIcon from "@material-ui/icon/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icon/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <SideBarRow selected Icon={HomeIcon} title="Home" />
            <SideBarRow Icon={WhatshotIcon} title="Trending" />
            <SideBarRow Icon={SubscriptionIcon} title="Subscription" />
            <SideBarRow Icon={VideoLibraryIcon} title="library" />
            <SideBarRow Icon={HistoryIcon} title="History" />
            <SideBarRow Icon={OndemandVideoIcon} title="Your videos"/>
            <SideBarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SideBarRow Icon={ThumbUpIcon} title="Liked Videos" />
            <hr />
        </div>
    )
}

export default SideBar;