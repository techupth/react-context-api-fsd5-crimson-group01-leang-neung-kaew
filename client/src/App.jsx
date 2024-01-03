import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { userDataContext } from "./context-api/userDataContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

function App() {
  const [userDatas, setUserDatas] = useState({});

  useEffect(() => {
    const userData = {
      username: "John",
      avatar: "https://placedog.net/100/100",
      level: "platinum",
    };
    setUserDatas(userData);
    console.log(userData)
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <userDataContext.Provider
        value={{
          userDataState: userDatas
        }}
      >
        <div className="App">
          <Router>
            <Routes>
              <Route
                path="/"
                element={<HomePage userDataState={userDatas} />}
              />
              <Route
                path="/product/view/:id"
                element={<ViewProductPage userDataState={userDatas} />}
              />
            </Routes>
          </Router>
        </div>
      </userDataContext.Provider>
    </>
  );
}

export default App;
