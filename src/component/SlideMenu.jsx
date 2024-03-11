import React from "react";
import "./slide-menu.css";
import { NavLink } from "react-router-dom";

function SlideMenu(props) {
  const handleCountryClick = () => {
    props.setCountry(true);
    props.setTopic(false);
    props.setYear(false);
    props.setSector(false);
    props.setPestle(false);
  };

  const handleTopicClick = () => {
    props.setCountry(false);
    props.setTopic(true);
    props.setYear(false);
    props.setSector(false);
    props.setPestle(false);
  };

  const handleYearClick = () => {
    props.setCountry(false);
    props.setTopic(false);
    props.setYear(true);
    props.setSector(false);
    props.setPestle(false);
  };

  const handleSectorClick = () => {
    props.setCountry(false);
    props.setTopic(false);
    props.setYear(false);
    props.setSector(true);
    props.setPestle(false);
  };

  const handlePestleClick = () => {
    props.setCountry(false);
    props.setTopic(false);
    props.setYear(false);
    props.setSector(false);
    props.setPestle(true);
  };
  return (
    <div className={`filter${props.isVisible ? " open-menu" : ""}`}>
      <ul>
        <li>
          <NavLink
            to="/filter"
            onClick={handleCountryClick}
            className={`${props.isCountry ? "Clicked" : "Link"}`}
          >
            Country
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/filter"
            onClick={handleTopicClick}
            className={`${props.isTopic ? "Clicked" : "Link"}`}
          >
            Topic
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/filter"
            onClick={handleYearClick}
            className={`${props.isYear ? "Clicked" : "Link"}`}
          >
            Year
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/filter"
            onClick={handleSectorClick}
            className={`${props.isSector ? "Clicked" : "Link"}`}
          >
            Sector
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/filter"
            onClick={handlePestleClick}
            className={`${props.isPestle ? "Clicked" : "Link"}`}
          >
            Pestle
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SlideMenu;
