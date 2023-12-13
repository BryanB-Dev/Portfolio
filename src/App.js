import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/style.scss";
import Home from "./pages/Home";
import E404 from "./pages/404";
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
