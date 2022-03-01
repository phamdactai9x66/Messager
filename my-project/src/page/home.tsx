import React from 'react';
import ListMessage from 'component/listMessage'
import SendMessage from 'component/sendMessage'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    return <React.Fragment>
        <Box sx={{ backgroundColor: 'Background.paper' }}>
            <Typography component={'p'}>this evn is client</Typography>
            <ListMessage />
            <SendMessage />
        </Box>
        <Link to={{
            pathname: 'Home'
        }} />

    </React.Fragment>;
};

export default Home;
