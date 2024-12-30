import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Blog from "./components/Blog";



const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Routing Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/page" element={<Page />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;