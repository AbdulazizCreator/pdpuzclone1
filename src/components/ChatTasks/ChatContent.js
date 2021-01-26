import React, { useState } from "react";
import { PagitionData } from "./PagitionData";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {IoMdSend} from 'react-icons/io'
function ChatContent() {
  const [pag] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="chatContent">
      <div className="Levels">
        <div className="paginationItems">
          {pag.map((item, index) => (
            <button key={index}>
              <div>
                <h4>{item}</h4>
                <p>⭐{PagitionData[item].number}</p>
                <h5>{PagitionData[item].level}</h5>
              </div>
            </button>
          ))}
        </div>
        <div className="paginationController">
          <GrPrevious />
          <div></div>
          <GrNext />
        </div>
      </div>
      <div className="LevelsDown">
        <div className="taskName">
          <h4>
            Murakkab <br /> animatsiya yaratish
          </h4>
        </div>
        <div className="levelNumber">
          <div className="innerLevelNuber">
            <p>
              O'quvchi reytingi: <span>53%</span>
            </p>
            <div>
              <span>🙂</span>
              <div className="shapeLevel">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="53"
                  className="slider"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chatSection">
        <div className="chatMenu">
          <div className="firstchat">
            <div>
              <form className="upload-btn-wrapper">
                <button className="btn">
                  <AiOutlineCloudUpload />
                </button>
                <input type="file" name="myfile" />
              </form>
              <div className="fileAbout">
                <h4>Ikkinchi topshiriq</h4>
                <p>3.5MB</p>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
                nemo.
              </p>
            </div>
            <p>13.08.20 | 13:50</p>
          </div>
          <div className="secondchat">
            <div>
              <div className="upload-btn-wrapper">
                <button className="btn">
                  <AiOutlineCloudUpload />
                </button>
                <input type="file" name="myfile" />
              </div>
              <div className="fileAbout">
                <h4>Ikkinchi topshiriq</h4>
                <p>3.5MB</p>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
                nemo.
              </p>
            </div>
            <p>13.08.20 | 13:50</p>
          </div>
        </div>
        <div className="typeComment">
          <form className="upload-btn-wrapper">
            <button className="btn">
              <AiOutlineCloudUpload />
            </button>
            <input type="file" name="myfile" />
          </form>
          <input placeholder="Vazifa haqida nimadir yozing" type="text" />
          <button>
            <IoMdSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent;
