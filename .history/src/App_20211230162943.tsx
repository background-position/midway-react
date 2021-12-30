import React, { useState, useEffect } from 'react';
import './App.css';
import hello, { post } from './apis/lambda';
import { BrowserRouter } from 'react-router-dom';
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
            <header className="App-header">
                <p>Message from ./apis/lambda: {message}</p>
                <p>
                    <button onClick={handleClick}>
                        Send message to backend
                    </button>
                </p>
            </header>
        </div>
    );
}

export default App;
