import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyle: "none",
              padding: "5px",
            }}
          >
            <div>
              <li>
                <Link to="/">React Helmet</Link>
              </li>
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
