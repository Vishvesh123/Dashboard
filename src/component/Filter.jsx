import React from "react";

import CountryFilter from "./filters/CountryFilter";
import TopicFilter from "./filters/TopicFilter";
import YearFilter from "./filters/YearFilter";
import SectorFilter from "./filters/SectorFilter";
import PestleFilter from "./filters/PestleFilter";

function Filter(props) {
  console.log(
    props.isCountry,
    props.isTopic,
    props.isYear,
    props.isSector,
    props.isPestle
  );
  return (
    <>
      {!props.isCountry &&
      !props.isTopic &&
      !props.isYear &&
      !props.isSector &&
      !props.isPestle ? (
        <CountryFilter
          countryDataArray={props.countryDataArray}
          data={props.data}
          isVisible={props.isVisible}
        />
      ) : null}
      {props.isCountry ? (
        <CountryFilter
          countryDataArray={props.countryDataArray}
          data={props.data}
          isVisible={props.isVisible}
        />
      ) : null}
      {props.isTopic ? (
        <TopicFilter
          topicDataArray={props.topicDataArray}
          data={props.data}
          isVisible={props.isVisible}
        />
      ) : null}
      {props.isYear ? (
        <YearFilter
          yearDataArray={props.yearDataArray}
          data={props.data}
          isVisible={props.isVisible}
        />
      ) : null}

      {props.isSector ? (
        <SectorFilter
          sectorDataArray={props.sectorDataArray}
          data={props.data}
          isVisible={props.isVisible}
        />
      ) : null}
      {props.isPestle ? (
        <PestleFilter
          pestleDataArray={props.pestleDataArray}
          data={props.data}
          isVisible={props.isVisible}
        />
      ) : null}
    </>
  );
}

export default Filter;
