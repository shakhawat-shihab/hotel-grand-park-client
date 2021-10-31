import React from 'react';
import Review from '../../Reviews/Review';
import Banner from '../Banner/Banner';
import Rooms from '../Rooms/Rooms';
import ChooseUs from './ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Rooms></Rooms>
            <ChooseUs></ChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;