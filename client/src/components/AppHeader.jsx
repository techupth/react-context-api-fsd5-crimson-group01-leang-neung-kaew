import React, { useContext } from "react";
import { UserDataContext } from "../App";

function AppHeader() {
  const context = useContext(UserDataContext);
  const username = context.userDataState?.username ?? "Guest";
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {username} </h2>
    </div>
  );
}

export default AppHeader;
