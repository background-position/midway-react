import React, { useState, useEffect, FC } from 'react';
import Header from './components/header';
import Container from '@mui/material/Container';

interface PageProps {}
const App: FC<PageProps> = () => {
    return (
        <Container maxWidth="sm">
            <Header />
        </Container>
    );
};
export default App;
