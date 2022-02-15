import React from 'react';
import ListMessage from 'component/listMessage'
import SendMessage from 'component/sendMessage'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    return <React.Fragment>
        <Box sx={{ backgroundColor: 'Background.paper' }}>
            <ListMessage />
            <SendMessage />
        </Box>
        <Link to={{
            pathname: 'Home'
        }} />

    </React.Fragment>;
};

export default Home;
