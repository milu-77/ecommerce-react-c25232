import React from "react";
import ItemsListContainer from "../ItemsListContainer/ItemsListContainer";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="orden">
        <div>ItemsListContainer</div>
        <div>--</div>
        <div>ItemsList</div>
        <div>--</div>
        <div>Items</div>
      </div>
      <br />
      <div className="orden">
        <div>ItemsItemDetailContainer </div>
        <div>--</div>
        <div>ItemDetail</div>
        <div>--</div>
        <div>Items</div>
      </div>

      <ItemsListContainer />
    </>
  );
};

export default Main;
