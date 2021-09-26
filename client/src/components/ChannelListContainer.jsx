import React from "react";

import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from ".";
import Cookies from "universal-cookie";
import ChatIcon from "../assets/ChatIcon.png";
import LogoutIcon from "../assets/logout.png";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={ChatIcon} alt="chat" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
    </>
  );
};

export default ChannelListContainer;
