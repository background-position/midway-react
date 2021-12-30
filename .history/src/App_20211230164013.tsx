import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './apis/pages/about';
import Index from './apis/pages/index';
import {routers}  from './apis/router'
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
