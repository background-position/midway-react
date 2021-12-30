import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './client/pages/about';
import Index from './client/pages/index';
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
