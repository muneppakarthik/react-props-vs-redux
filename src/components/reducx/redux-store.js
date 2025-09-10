import React from "react";
import { store } from "../../globalStores/store/store";
import { Provider } from "react-redux";
import ThmeNameRedux from "./thmeNameRedux";
import ThmeNameUpdateRedux from "./thmeNameUpdateRedux";
import ThmeCountRedux from "./thmeCountRedux";
import ThmeCountUpdateRedux from "./thmeCountUpdateRedux";

export const ReduxStore = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Store Page</h1>
        <ThmeNameRedux />
        <ThmeNameUpdateRedux />

        <hr />
        <ThmeCountRedux />
        <ThmeCountUpdateRedux />
      </div>
    </Provider>
  );
};
