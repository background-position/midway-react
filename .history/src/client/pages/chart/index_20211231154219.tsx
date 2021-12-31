import React, { useState, useEffect, FC } from 'react';
import Container from '@mui/material/Container';
import Header from './components/header';
import Chart from './components/chart';

interface PageProps {}
const App: FC<PageProps> = () => {
    return (
        <Container maxWidth="sm">
            <Header />
        </Container>
    );
};
export default App;
