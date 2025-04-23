import React, { useState } from 'react';
import {

Box,
TextField,
Button,
Typography,
Container,
CssBaseline,
} from '@mui/material';

const ForgotPassword: React.FC = () => {
const [email, setEmail] = useState('');

const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle forgot password logic here
    console.log('Email submitted:', email);
};

return (
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
            <Typography component="h1" variant="h5">
                Forgot Password
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    </Container>
);
};

export default ForgotPassword;