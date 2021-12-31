import React, { useState, useEffect, FC } from 'react';
import Header from './components/header';
import Container from '@mui/material/Container';
interface PageProps {}
const App: FC<PageProps> = () => {
    return (
        <div>
            <Container maxWidth="sm">
                <Header />
            </Container>
        </div>
    );
};
export default App;
