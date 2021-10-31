import React from 'react';
import Banner from '../Banner/Banner';
import Rooms from '../Rooms/Rooms';
import ChooseUs from './ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Rooms></Rooms>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;