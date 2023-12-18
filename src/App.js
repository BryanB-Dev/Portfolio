import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/style.scss";
import Home from "./pages/Home";
import Layout from './components/Layout';
import Profile from './pages/profile';
import Skills from './pages/skills';
import Projects from './pages/projects';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
