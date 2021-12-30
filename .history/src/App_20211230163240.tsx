import React, { useState, useEffect } from 'react';
import './App.css';
import hello, { post } from './apis/lambda';
import { Routes, Route, Link } from 'react-router-dom';
import About from './apis/pages/about';
import Index from './apis/pages/index';
function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        hello().then((response) => setMessage(response.message));
    }, []);

    const handleClick = async () => {
        const message = window.prompt('Type message!');
        const response = await post(message);
        alert(JSON.stringify(response, null, 2));
    };

    return (
        <div className="App">
            <Routes></Routes>
           
        </div>
    );
}

export default App;
