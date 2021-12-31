import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const theme = createTheme();
export default function SignUp() {
    const [open, setOpen] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    const handleregister = (data) => {
        console.log(data);
    };
    const handleClose = () => {
        setOpen(false);
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
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit(handleLogin)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoFocus
                                    name="nickname"
                                    {...register('nickname', {
                                        required: true,
                                    })}
                                    fullWidth
                                    id="nickname"
                                    label="nickname"
                                    error={Boolean(errors.nickname)}
                                    helperText={
                                        Boolean(errors.nickname)
                                            ? 'nickname entry'
                                            : ''
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    {...register('email', {
                                        required: true,
                                    })}
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    error={Boolean(errors.email)}
                                    helperText={
                                        Boolean(errors.email)
                                            ? 'email entry'
                                            : ''
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    {...register('password', {
                                        required: true,
                                    })}
                                    id="password"
                                    autoComplete="new-password"
                                    error={Boolean(errors.password)}
                                    helperText={
                                        Boolean(errors.password)
                                            ? 'password entry'
                                            : ''
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="confirm"
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (value) => {
                                            return (
                                                value === getValues('password')
                                            );
                                        },
                                    })}
                                    label="confirm password"
                                    name="confirmPassword"
                                    autoComplete="new-password"
                                    type="password"
                                    error={Boolean(errors.confirmPassword)}
                                    helperText={
                                        Boolean(errors.confirmPassword)
                                            ? 'confirmPassword entry or error'
                                            : ''
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'confirm?'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}
