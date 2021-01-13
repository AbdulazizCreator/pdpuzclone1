import React, { useState } from "react";
import { BsChatFill, BsCheckAll, BsChevronDown } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {BiCloudDownload} from 'react-icons/bi'
function ChatProfile() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const toggle1 = () => {
    setOpen1(!open1)
    setOpen2(false)
    console.log(open1);
  }
    const toggle2 = () => {
      setOpen2(!open2);
      setOpen1(false)
      console.log(open2);
    };
  return (
    <div className="chatProfile">
      <div className="chatPerson">
        <img src="images/men.jpg" alt="" />
        <h3>Nurmatova Kamola</h3>
        <div className="personAbout">
          <a href="#" className="col-4">
            <div>
              <BsChatFill />
            </div>
            <p>Chatga o'tish</p>
          </a>
          <a
            href="#"
            onClick={toggle1}
            
            className='col-4'
          >
            <div>
              <BsChatFill />
            </div>
            <p>Kurs info</p>
            <div className={open1 ? "kursInfo flex" : 'kursInfo none'}>
              <div>
                <div className="circle"></div>
                <p>Frontend Development</p>
              </div>
              <div>
                <div className="circle"></div>
                <p>1. Kirish. HTML haqida tushuncha- lar. Amaliy</p>
              </div>
              <div>
                <div className="circle"></div>
                <p>1.1 Boshlang’ich tushunchalar bo’yicha tushuncha</p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="col-4"
            onClick={toggle2}
          >
            <div>
              <BsChatFill />
            </div>
            <p>Task history</p>
            <div className={open2 ? "taskHistory flex" : 'taskHistory none'}>
              <div>
                <h4>Kurslar</h4>
                <BsChevronDown />
              </div>
              <div>
                <h4>Kurslar</h4>
                <BsChevronDown />
              </div>
              <div>
                <h4>Kurslar</h4>
                <BsChevronDown />
              </div>
            </div>
          </a>
        </div>
        <div className="personStars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div className="checkError">
          <div>
            <BsCheckAll />
          </div>
          <div>
            <BsCheckAll />
          </div>
        </div>
        <hr />
        <div className="taskAbout">
          <h3>2. Fill yordamida berilgan animatsiyani yarating</h3>
          <div>
            <p>
              Kiritilgan stringning berilgan indexdan boshlab qolgan qismini
              chop qiluvchi dastur yozing. Masalan: String: android,index=2
              Natija: “droid”;
            </p>
          </div>
        </div>
        <div className="task">
          <a href="/">
            <BiCloudDownload />
            <span>2-topshiriq savol.jpg</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChatProfile;
