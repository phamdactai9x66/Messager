import React from 'react';

interface About<T> {

}


const About: React.FC<About<any>> = ({ ...props }) => {
    return <React.Fragment>
        this is page about
    </React.Fragment>;
};

export default About;
