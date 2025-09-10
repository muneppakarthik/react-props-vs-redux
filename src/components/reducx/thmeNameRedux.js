import React from "react";
import { useSelector } from "react-redux";

const ThmeNameRedux = () => {
  const theme = useSelector((state) => state.theme.mode);

  console.log("name", theme);
  return <div>thmeNameRedux: {theme}</div>;
};

export default ThmeNameRedux;
