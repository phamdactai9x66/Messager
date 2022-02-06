import React from 'react';
import ListMessage from '../component/listMessage'
import SendMessage from '../component/sendMessage'
import { Box } from '@mui/material'
interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    return <React.Fragment>
        <Box sx={{ maxWidth: 360, backgroundColor: 'Background.paper' }}>
            <ListMessage />
            <SendMessage />
        </Box>

    </React.Fragment>;
};

export default Home;
