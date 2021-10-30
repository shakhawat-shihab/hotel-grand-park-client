import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BsFillCartCheckFill, BsFillInfoCircleFill } from "react-icons/bs";
import useCart from '../../hooks/useCart';

const RoomCard = (props) => {
    const history = useHistory();
    const { name, description, image, price, id } = props.data;
    function handleDetails() {
        history.push(`/service/${id}`);
    }
    return (
        <Col>
            <Card className='h-100 pb-3 shadow-sm service-card' >
                {/* <div className='mx-auto '  > */}
                <img src={image} className='w-100' height='250px' alt={name} />
                {/* </div> */}
                <Card.Body className='py-2' >
                    <Card.Title className='text-primary fw-bold pb-2'>{name}</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                        {description && description.length >= 250 ? description?.substring(0, 180).concat(' ...') : description}
                    </Card.Text>
                </Card.Body>
                <div className='ps-2'>
                    <h4 className='text-warning fw-bold ps-2'>
                        {/* {service.includes('Indoor and Outdoor Sports') &&
                            < span style={{ textDecoration: 'line-through', textDecorationStyle: 'double' }}
                                className='pe-1'
                            > 50 </span>} */}
                        {price} ৳
                    </h4>
                </div>
                <div className='px-2 d-flex align-items-center'>
                    <Button variant='primary' onClick={handleDetails} >
                        Show Details
                        <BsFillInfoCircleFill className='ps-2 fs-4' />
                    </Button>
                    {/* <Button variant='primary' onClick={handleOrder} className='ms-2' >
                        Book
                        <BsFillCartCheckFill className='ps-2 fs-4' />
                    </Button> */}
                </div>
            </Card >
        </Col >
    );
};

export default RoomCard;