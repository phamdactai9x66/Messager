import React from 'react';
import { useAuth } from '../component/auth/requireAuth'
import { Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
interface Login<T> {

}

const Login: React.FC<Login<any>> = ({ ...props }) => {
    const { checkLogin, Logout, Login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const submitForm = () => {
        const navigatePath = (location.state as any)?.path || '/'
        Login()
        navigate(navigatePath, { state: {}, replace: true });
    }
    return <>
        <Button onClick={submitForm}>
            Login
        </Button>
    </>;
};

export default Login;
