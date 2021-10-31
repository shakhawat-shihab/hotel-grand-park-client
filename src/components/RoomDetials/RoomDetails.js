import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { BsFillCartCheckFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { useHistory, useParams } from 'react-router';
// import useRoom from '../../hooks/useRoom';
import { AiFillHome } from "react-icons/ai";
// import useCart from '../../hooks/useCart';
import { addToDbWithoutCount } from '../../dB';
import useService from '../../hooks/UseService';

const RoomDetails = () => {
    window.scrollTo(0, 0);
    const { serviceId } = useParams();
    const history = useHistory();
    const { services, isLoadingService } = useService();
    // const { cart } = useCart();
    const [currentService, setCurrentService] = useState({});
    // console.log('cart ', cart);
    useEffect(() => {
        setCurrentService(services.find(x => x.id === serviceId));
    }, [services]);
    function handleOrder() {
        addToDbWithoutCount(serviceId);
        history.push('/my-order')
    }
    return (
        isLoadingService === false
            ?
            <div className='mt-5 pt-4'>
                <div className='row m-0 justify-content-around g-4'>
                    <div className='col-md-7 border-end '>
                        <h2 className='border-bottom text-center fw-bold py-3'>{currentService?.name}</h2>
                        <div className='mx-3 mt-3 border rounded' style={{ minHeight: '100px' }}>
                            <img src={currentService?.image} alt={" image of " + currentService?.name} width='100%' />
                        </div>
                        <div className='py-2 px-3'>
                            <p style={{ textAlign: 'justify' }}>
                                {currentService?.description}
                            </p>
                        </div>
                        <div className='py-2 px-3'>
                            <h5 className='text-warning fw-bold'>
                                Cost: {currentService?.price}
                            </h5>
                            {
                                currentService?.offer && <span className='text-danger fw-bold'>({currentService.offer} % off)</span>
                            }
                        </div>
                    </div>
                    <div className='col-md-4 mt-4' >
                        <h2>Complimentary Services</h2>
                        <ul className='list-unstyled'>
                            {
                                currentService?.complementary ?
                                    currentService.complementary.map(x => <li key={x} > <BsFillCheckCircleFill className='fs-2 text-success pe-3' />  {x} </li>) :
                                    <h5 className='text-secondary' > No complemenatry </h5>
                            }
                        </ul>
                        <div className='pt-3'>
                            <h6 className='fw-bold'>CHECK-IN & CHECK-OUT POLICY</h6>
                            <ul>
                                <li> Check-in Time is 13:00 hours and Check-out Time is 12:00 hours.</li>
                                <li>Early Check-in, Late Check-out or Extended Staying is subject to availability of room.</li>
                                <li>50% of room charge is applicable for Early Morning Check-in or Late Check-out up to 6 pm. Late Check-out after 6 pm will be full charged.</li>
                                <li>All guests must bring their Organizational Photo ID, NID card or Passport to be presented upon check-in.</li>
                            </ul>
                        </div>
                        <div className='pt-3' s>
                            <h6 className='fw-bold'>RESERVATION & CANCELLATION POLICY</h6>
                            <ul>
                                <li>Prior reservation required to avail these rates.</li>
                                <li>Cancellation of individual booking would be intimated minimum 48 hours ahead of arrival.</li>
                                <li>One night accommodation charge will be applicable in case of No-Show.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-4 text-center '>
                    <Button variant='primary' onClick={() => { history.push('/home') }} className='ms-2' >
                        Go Back to
                        <AiFillHome className='ps-2 fs-3' />
                    </Button>
                    <Button variant='primary' onClick={handleOrder} className='ms-4' >
                        Book This Service
                        <BsFillCartCheckFill className='ps-2 fs-3' />
                    </Button>
                </div>
            </div>
            :
            <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                <Spinner animation='grow'></Spinner>
            </div>
    );
};

export default RoomDetails;