import React from 'react';
import './homepage.styles.scss'
import Directory from '../component/menu/directory/directory';

const Homepage = ()=>{

    return(
        <>
        <div className='homepage'>
            <Directory />
        </div>
        </>
    )
}

export default Homepage;