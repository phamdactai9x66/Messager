import React from 'react';
import { Button, Typography } from '@mui/material'
import { useAuth } from '../component/auth/requireAuth'
import { useNavigate } from 'react-router-dom'
interface Profile<T> {

}

const Profile: React.FC<Profile<any>> = ({ ...props }) => {
    const { checkLogin, Logout, Login } = useAuth();
    const navigate = useNavigate();
    const LogoutPage = () => {
        Logout()
        navigate('/Login', { replace: true })
    }
    return <React.Fragment>
        <Typography variant='body2' component={'p'} noWrap>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil nemo voluptas illo exercitationem eum? Id a unde sint, necessitatibus fugit cupiditate ullam voluptates sequi amet temporibus incidunt, ab libero.
        </Typography>
        <Button onClick={LogoutPage}>
            Logout
        </Button>
    </React.Fragment>;
};

export default Profile;
