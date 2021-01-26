import React from "react";
import "./chatTask.scss";
import ChatTaskList from "./ChatTaskList";
import ChatContent from "./ChatContent";
import ChatProfile from "./ChatProfile";

function ChatTask() {
  return (
    <div className="chatTask">
      <div className="MentorTop">
        <p>Dilshod Mirsoatov</p>
        <div>
          <img src="images/vectorTop2.svg" alt=""/>
        </div>
        <div>
          <img src="images/vectorTop.svg" alt=""/>
        </div>
      </div>
      <h2>VAZIFALAR VA CHAT</h2>
      <div className="mainChatTask">
        <ChatTaskList />
        <ChatContent />
        <ChatProfile />
      </div>
    </div>
  );
}

export default ChatTask;
