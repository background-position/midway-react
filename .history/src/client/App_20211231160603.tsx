import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/about';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Chart from './pages/chart/'
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}
export default App;
