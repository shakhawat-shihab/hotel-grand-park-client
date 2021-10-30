import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useService from '../../hooks/UseService';
import RoomCard from '../RoomCard/RoomCard';

const Services = () => {
    const { services, isLoadingService } = useService();
    // console.log(rooms, isLoadingRoom);
    if (isLoadingService) {
        return (
            <div className='mt-5 pt-5 text-center'>
                <Spinner animation='grow'></Spinner>
            </div>
        );
    }
    else {
        return (
            <div className='pt-4 mt-5'>
                <h1 className='text-center'>Our Services</h1>
                <Row md={2} lg={4} sm={2} xs={1} className="g-3 m-0">
                    {services.map(x => <RoomCard data={x} key={x.id} ></RoomCard>)}
                </Row>
            </div>
        );
    }
};

export default Services;