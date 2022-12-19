import React, { Fragment } from "react";
import Subtitle from "./../Subtitle/Subtitle.component";
// import "./Lists.styles.scss";

const TextList = ({ title, items, platforms, collection }) => (
  <Fragment>
    <span class="font-bold"><Subtitle text={title} /></span> 
    <ul className="mb-5">
      {items && collection
        ? items.slice(0, 3).map((item) => (
            <li className="list__item" key={item.id}>
              {item.name}
            </li>
          ))
        : items && platforms
        ? items.map((item) => (
            <li className="inline-block" key={item.platform.id}>
              {item.platform.name + ", "}
            </li>
          ))
        : items.map((item) => (
            <li className="list__item" key={item.id}>
              {item.name}
            </li>
          ))}
    </ul>
  </Fragment>
);

export default TextList;
