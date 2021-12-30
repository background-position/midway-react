import React from 'react';
import { routes } from './router';
import { renderRoutes } from 'react-router-config';
function App() {
    return (
        <div className="App">
            {renderRoutes(routes)}
            ceee
        </div>
    );
}

export default App;
