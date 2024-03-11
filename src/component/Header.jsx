import React from "react";
import { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import SlideMenu from "./SlideMenu";

function Header(props) {
  const navigate = useNavigate();

  const handleVisibility1 = () => {
    props.setVisible(true);
  };
  const handleVisibility2 = () => {
    props.setVisible(false);
  };

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount === 0 || clickCount % 2 === 0) {
      handleVisibility1();
    } else if (clickCount === 1 || clickCount % 2 !== 0) {
      handleVisibility2();
    }

    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  const handleHeaderClick = () => {
    props.setVisible(false);
    setClickCount((prevClickCount) => prevClickCount + 1);
    props.setCountry(false);
    props.setTopic(false);
    props.setYear(false);
    props.setSector(false);
    props.setPestle(false);
    navigate("/");
  };

  return (
    <div className="Header">
      <div className="Filter">
        <i class="fa-solid fa-angle-right fa-xl" onClick={handleClick}></i>
        <h2>Filter Options</h2>
        <SlideMenu
          isVisible={props.isVisible}
          setCountry={props.setCountry}
          setTopic={props.setTopic}
          setYear={props.setYear}
          setSector={props.setSector}
          setPestle={props.setPestle}
          isCountry={props.isCountry}
          isTopic={props.isTopic}
          isYear={props.isYear}
          isSector={props.isSector}
          isPestle={props.isPestle}
        />
      </div>
      <div className="Head">
        <h1 onClick={handleHeaderClick}>
          <i class="fa-solid fa-user-tie"></i>&nbsp; Dashboard
        </h1>
      </div>
    </div>
  );
}

export default Header;
