import "./App.css";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Quote from "./Quote";
import Logout from "./Logout";
import Sidebar from "./SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="sticky-sidebar">
          <Sidebar />
        </div>
        <div style={{ minWidth: "85%" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
