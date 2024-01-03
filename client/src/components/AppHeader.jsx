import { useContext } from "react";
import { userDataContext } from "../context-api/userDataContext";

function AppHeader() {

  const contextData = useContext(userDataContext);
  const username = contextData.userDataState?.username ?? "Guest";
  
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {username}</h2>
    </div>
  );
}

export default AppHeader;
