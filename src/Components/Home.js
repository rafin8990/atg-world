import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='btn-div'>
           <Link to='/love'><button className='btn'>Click Me</button> </Link>
        </div>
    );
};

export default Home;