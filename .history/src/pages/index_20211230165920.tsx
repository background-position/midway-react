import React, { useState, useEffect, FC } from 'react';
import hello, { post } from '../apis/lambda/index';
interface PageProps {}
const App: FC<PageProps> = () => {
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
        <div>
            <p>
                <button onClick={handleClick}>INdex</button>
            </p>
        </div>
    );
};
export default App;
