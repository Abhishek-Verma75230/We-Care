import React from 'react';
import { useState } from 'react';
// import { API } from '../../service/api';
import { API } from '../service/api';
import { useNavigate } from 'react-router-dom';

import { Box, TextField, Button, styled, Typography } from '@mui/material';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
    margin-top: 70px;
    color: black;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: red;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const Image = styled('img')({
    margin: 50,
    width: 100,
    margin: 'auto',
    display: 'flex',
});

const Wrapper = styled(Box)`
    padding: 25px 25px;
    display: flex;
    color:blue;
    flex-direction: column;
    & > div, & > button {
        margin-top: 20px;
    }
    
`;

const signupinitialvalues = {
    name: "",
    username: "",
    password: ""
};

const logininitialvalues = {
    username: "",
    password: ""
};

function Login({ isuserAuthenticated }) {
    const imgUrl = ''; 
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupinitialvalues);
    const [error, setError] = useState('');
    const [log, setLog] = useState(logininitialvalues);

    const onInputchange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onValuechange = (e) => {
        setLog({ ...log, [e.target.name]: e.target.value });
    }

    const toggle = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const signupUser = async () => {
        try {
            let response = await API.pSignup(signup);
            setSignup(signupinitialvalues);
            toggleAccount('login');
            setError('');
        } catch (error) {
            setError('Something went wrong bhaiya!!');
        }
    }
    const navigate=useNavigate();
    const loginUser = async () => {
        try {
            let response = await API.puserLogin(log);
            // setLog(logininitialvalues);
            // setError('');
            // isuserAuthenticated(true);
            navigate('/Patient-Page');
        } catch (error) {
            setError('Something went wrong bhaiya!!');
        }
    }

    return (
        <Component>
            <Box>
                <Image src={imgUrl} alt='' />
                {account === 'login' ?
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onValuechange(e)} name='username' label="Enter Username" />
                        <TextField variant='standard' onChange={(e) => onValuechange(e)} name='password' label="Password" />
                        <Button variant="contained" onClick={() => loginUser()}>Login</Button>
                        <Button onClick={() => toggle()}>Create an account</Button>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onInputchange(e)} name='name' label="Name" />
                        <TextField variant='standard' onChange={(e) => onInputchange(e)} name='username' label="Username" />
                        <TextField variant='standard' onChange={(e) => onInputchange(e)} name='password' label="Password" />
                        {error && <Error>{error}</Error>}
                        <Button variant="contained" onClick={() => signupUser()}>Sign Up</Button>
                        <Button onClick={() => toggle()}>Already have an account</Button>
                    </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;
