import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import ErrorPage from "./error-page";
import Sidebarcashier from "./sidebar/sidebarcashier";
import Sidebarcustomer from "./sidebar/sidebarcustomer";
import Sidebaremployee from "./sidebar/sidebaremployee";
import Sidebarowner from "./sidebar/sidebarowner";
import Sidebarmanager from "./sidebar/sidebarmanager";
import Sidebarboss from "./sidebar/sidebarboss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sidebarcashier" element={<Sidebarcashier />}/>
          <Route path="/sidebarcustomer" element={<Sidebarcustomer />}/>
          <Route path="/sidebaremployee" element={<Sidebaremployee />}/>
          <Route path="/sidebarowner" element={<Sidebarowner />}/>
          <Route path="/sidebarmanager" element={<Sidebarmanager />}/>
          <Route path="/sidebarboss" element={<Sidebarboss />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
