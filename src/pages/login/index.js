import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let history = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let redirect ='';
    console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    if (data.get('email')!=='' || data.get('password')!=='') {
        redirect='/home';
        history(redirect);
    } 
  };

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid sm={4} md={7} sx={{backgroundImage: 'url(https://www.avaya.com/es/images/cs-escuela-colombiana-smb15210es-body3.jpg)'}}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h5">Login</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField  required fullWidth
                id="email"
                name="email"
                margin="normal"
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
              <TextField required fullWidth
                id="password"
                name="password"
                margin="normal"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Button fullWidth
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}