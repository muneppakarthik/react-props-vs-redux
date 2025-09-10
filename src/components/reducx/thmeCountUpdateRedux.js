import React from "react";
import { useDispatch } from "react-redux";
import { toggleCount } from "../../globalStores/store/themeSlice";

const ThmeCountUpdateRedux = () => {
  // const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  console.log("update count");
  return (
    <div>
      <button onClick={() => dispatch(toggleCount())}>Update theme</button>
    </div>
  );
};

export default ThmeCountUpdateRedux;
