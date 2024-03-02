import React from "react";
import style from "../components/AppName.module.css";

function AppName() {
  return (
    <h1 className={`text-center color-danger ${style["todoHeading"]}`}>
      Todo APP
    </h1>
  );
}

export default AppName;
