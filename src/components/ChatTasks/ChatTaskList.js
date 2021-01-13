import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrSort } from "react-icons/gr";
import ChatItem from "./ChatItem";
import { ChatItemData } from "./ChatItemData";
function ChatTaskList() {
  return (
    <div className="chatTaskList">
      <ul>
        <li>
          <a href="#fdsa">
            Vazifalar <span>3</span>
          </a>
        </li>
        <li>
          <a href="#fdsa">
            Chat <span>5</span>
          </a>
        </li>
      </ul>
      <form action="#">
        <button>
          <FiSearch />
        </button>
        <input type="text" placeholder="Search" />
        <button>
          <GrSort />
        </button>
      </form>
      <div className="chatPeople">
        {ChatItemData.map((item) => (
          <ChatItem
            name={item.name}
            img={item.img}
            messageNumber={item.messageNumber}
            comment={item.comment}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatTaskList;
