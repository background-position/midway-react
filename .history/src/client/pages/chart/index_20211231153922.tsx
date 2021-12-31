import React, { useState, useEffect, FC } from 'react';
import Header from './components/header';
interface PageProps {}
const App: FC<PageProps> = () => {
    return (
        <div>
            <Header></Header>
        </div>
    );
};
export default App;
