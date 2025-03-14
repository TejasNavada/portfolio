import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Portfolio from './pages/Portfolio';
import Canvas from './components/Canvas';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    
    
    <Canvas/>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              // <ProtectedRoute>
              <Home />
              // </ProtectedRoute> 
            }
          />
          <Route path="home" element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          {/* <Route path="register" element={<Register />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
