import React from "react";
import "./chatTask.scss";
import { BsFillPersonFill } from "react-icons/bs";
import ChatTaskList from "./ChatTaskList";
import ChatContent from "./ChatContent";
import ChatProfile from "./ChatProfile";

function ChatTask() {
  return (
    <div className="chatTask">
      <div className="MentorTop">
        <p>Dilshod Mirsoatov</p>
        <div>
          <BsFillPersonFill />
        </div>
        <div>
          <BsFillPersonFill />
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
