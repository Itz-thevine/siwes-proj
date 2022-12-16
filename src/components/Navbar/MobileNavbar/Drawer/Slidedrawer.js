import React from "react";
import { NavLink } from 'react-router-dom'
import "./Slidedrawer.css";

const SlideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={`${drawerClasses} navCon`}>
      <NavLink className="navItem" onClick={props.close} to="/">HOME</NavLink>
      <NavLink className="navItem" onClick={props.close} to="/products">PRODUCTS</NavLink>
      <NavLink className="navItem" onClick={props.close} to="/services">SERVICES</NavLink>
      <NavLink className="navItem" onClick={props.close} to="/contact">CONTACT US</NavLink>
      <NavLink className="navItem" onClick={props.close} to="/about">ABOUT US</NavLink>
    </div>
  );
};

export default SlideDrawer;
