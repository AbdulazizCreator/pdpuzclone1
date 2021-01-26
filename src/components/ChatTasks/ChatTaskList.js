import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrSort } from "react-icons/gr";
import { Link } from "react-router-dom";
import ChatItem from "./ChatItem";
import { ChatItemData } from "./ChatItemData";
function ChatTaskList() {
  return (
    <div className="chatTaskList">
      <ul>
        <li>
          <Link to="/">
            Vazifalar <span>3</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Chat <span>5</span>
          </Link>
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
        {ChatItemData.map((item, index) => (
          <ChatItem
            index={index}
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
