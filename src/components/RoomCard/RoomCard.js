import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BsFillInfoCircleFill } from "react-icons/bs";
// import useCart from '../../hooks/useCart';

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
                <div className=' px-3 d-flex justify-content-between align-items-center '>
                    <div className='d-flex flex-column'>
                        <h4 className='text-warning fw-bold m-0'>
                            {price} ৳
                        </h4>
                        <br />
                        {
                            props.data?.offer && <span className='text-danger fw-bold'>({props.data.offer} % off)</span>
                        }

                    </div>

                    <Button variant='primary' onClick={handleDetails} >
                        Show Details
                        <BsFillInfoCircleFill className='ps-2 fs-4' />
                    </Button>
                </div>
            </Card >
        </Col >
    );
};

export default RoomCard;