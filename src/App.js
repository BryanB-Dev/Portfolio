import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/style.scss";
import Home from "./pages/Home";
import E404 from "./pages/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </Router>
  );
}

export default App;
