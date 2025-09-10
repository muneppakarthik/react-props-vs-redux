import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../globalStores/store/themeSlice";

const ThmeNameUpdateRedux = () => {
  // const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  console.log("update");
  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>Update theme</button>
    </div>
  );
};

export default ThmeNameUpdateRedux;
