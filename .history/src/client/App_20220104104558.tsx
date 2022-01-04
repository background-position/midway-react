import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/about';
import Login from './pages/login';
import Register from './pages/register';
import Chart from './pages/chart/index';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/chart" element={<Chart />} />
            </Routes>
        </div>
    );
}
export default App;
