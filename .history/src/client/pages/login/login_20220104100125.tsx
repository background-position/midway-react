import React, { FC, useState, useEffect } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import hello, { post } from '../../../service/apis/lambda/index';
// import { Link } from 'react-router-dom';
const theme = createTheme();
export const App: FC = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {
        hello().then((response) => setMessage(response.message));
    }, []);
    const handleClick = async () => {
        const message = window.prompt('Type message!');
        const response = await post(message);
        alert(JSON.stringify(response, null, 2));
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const handleLogin = (data) => {
        console.log('handleLogin');
        console.log(errors);
        console.log(data);
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <TextField
                            margin="normal"
                            {...register('email', {
                                required: true,
                            })}
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={Boolean(errors.email)}
                            helperText={
                                Boolean(errors.email) ? 'Email entry.' : ''
                            }
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            {...register('password', {
                                required: true,
                            })}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={Boolean(errors.password)}
                            helperText={
                                Boolean(errors.email) ? 'password entry.' : ''
                            }
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {/* <Link href="#" variant="body2">
                                    Forgot password?
                                </Link> */}
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
export default App;
