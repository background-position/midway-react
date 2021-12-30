import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Index from './pages/index';
import { routers } from './router';
import { renderRoutes } from 'react-router-config';
function App() {
    return (
        <div className="App">
            {renderRoutes(routers)}
        </div>
    );
}

export default App;
