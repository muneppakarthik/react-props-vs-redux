import React from "react";
import { useSelector } from "react-redux";

const ThmeCountRedux = () => {
  const theme = useSelector((state) => state.theme.count);

  console.log("count", theme);
  return <div>ThmeCountRedux: {theme}</div>;
};

export default ThmeCountRedux;
