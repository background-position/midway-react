import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Index from './pages/index';
import Login from './pages/login';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}
export default App;
