import React from "react";

function ChatItem(props) {
  return (
    <button className="chatItem" key={props.index}>
      <div className="chatImg">
        <img src={props.img} alt="" />
      </div>
      <div className="Information">
        <div>
          <h5>{props.name}</h5>
          <p>{props.time}</p>
        </div>
        <div>
          <p>{props.comment}</p>
          <span>{props.messageNumber}</span>
        </div>
      </div>
    </button>
  );
}

export default ChatItem;
