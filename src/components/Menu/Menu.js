import React, { Component } from "react";
import "./Menu.scss";
import { MenuData } from "./MenuData";
import MenuItem from "./MenuItem";
import { WiDirectionUpRight } from "react-icons/wi";
import { HiMenu } from "react-icons/hi";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from "react-router-dom";
export class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  render() {
    const toggle = () => {
      this.setState({open: !this.state.open})
    }
    return (
      <React.Fragment>
        <button onClick={toggle} className="show menuToggle">
          <HiMenu />
        </button>
        <div className={this.state.open ? "Menu hide" : "Menu"}>
          <button onClick={toggle} className="menuClose">
            <AiOutlineCloseCircle />
          </button>
          <div className="logo-img">
            <img src="images/pdpuz-logo.svg" alt="" />
          </div>
          <div className="MenuItems">
            {MenuData.map((item) => (
              <MenuItem name={item.name} img={item.img} />
            ))}
          </div>
          <div className="DownItems">
            <Link href="/">
              <WiDirectionUpRight />
              <p>Home pdp.uz</p>
            </Link>
            <Link href="/">
              <WiDirectionUpRight />
              <p>Chiqish</p>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
