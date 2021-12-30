import React from 'react';
import { Routes, Route,renderRoutes } from 'react-router-dom';
import About from './apis/pages/about';
import Index from './apis/pages/index';
import { routers } from './apis/router';
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
