import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Index from './pages/index';
import { routers } from './apis/router';
import { renderRoutes } from 'react-router-config';
function App() {
    return (
        <div className="App">
            <Routes>
                {routers.map((item) => {
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={item.components}
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
