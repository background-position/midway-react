import React, { useState, useEffect, FC } from 'react';
import Header from './components/header';
import Container from '@mui/material/Container';
interface PageProps {}
const App: FC<PageProps> = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </div>
    );
};
export default App;
