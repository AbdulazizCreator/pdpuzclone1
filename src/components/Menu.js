import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuData, ExtraMenuData } from "./MenuData";

const Menu = () => {
  const [ctr, Sctr] = useState(0);
  const [selectedId, setSelectedId] = useState(Array(7).fill(false));
  const [menuOpen, setMenuOpen] = useState(false)
  const active = (id) => {
    let temp = selectedId;
    temp[id] = true;
    temp.forEach((item, index) => {
      if (index !== id) {
        temp[index] = false;
      }
      Sctr(ctr + 1);
      if (ctr === temp.length) {
        setSelectedId(temp);
      }
    });
  };
  console.log(selectedId);
  return (
    <React.Fragment>
      <div className="menuOpen" onClick={() => setMenuOpen(true)}>
        <img src="images/menu-open.svg" alt="" />
      </div>
      <div id="menu" style={{ left: menuOpen ? "0" : "-300px" }} className='p-relative'>
        <div className="menuClose" onClick={() => setMenuOpen(false)}>
          <img src="images/close.svg" alt="" />
        </div>
        <div className="logo">
          <img src="images/pdpuz-logo.svg" alt="" />
        </div>
        <div className="Menus">
          <div className="mainMenus">
            {MenuData.map((item, index) => (
              <Link onClick={() => active(index)} to="/" key={item.id}>
                <div className="menuItem">
                  <div className="menu-icon">{item.img}</div>
                  <p className="mb-0">{item.name}</p>
                  <div className="right-border"></div>
                </div>
              </Link>
            ))}
          </div>
          <div className="extraMenus">
            {ExtraMenuData.map((item) => (
              <Link to="/" key={item.id}>
                <div className="menuItem">
                  <div className="menu-icon">{item.img}</div>
                  <p className="mb-0">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
