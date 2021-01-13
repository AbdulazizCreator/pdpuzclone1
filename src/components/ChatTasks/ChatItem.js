import React from "react";

function ChatItem(props) {
  return (
    <div className="chatItem">
      <div className="chatImg">
        <img src={props.img} alt="" />
      </div>
      <div className="Information">
        <div>
          <h4>{props.name}</h4>
          <p>{props.time}</p>
        </div>
        <div>
          <p>{props.comment}</p>
          <span>{props.messageNumber}</span>
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
