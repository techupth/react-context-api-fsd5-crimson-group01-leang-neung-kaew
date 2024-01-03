import { useContext } from "react";
import { userDataContext } from "../App";

function AppHeader() {
  const context = useContext(userDataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {context.user.username}</h2>
    </div>
  );
}

export default AppHeader;
