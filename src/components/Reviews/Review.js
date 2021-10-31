import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import img1 from '../../images/feedback/feedback-1.webp';
import img2 from '../../images/feedback/feedback-2.jpg';
import img3 from '../../images/feedback/boy-1.png';
import { Carousel } from 'react-bootstrap';
const Review = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='my-5 '>
            <h2 className='text-center mt-3 fw-bold'>Happy Client’s Feedback</h2>
            <div className='mt-3'>
                <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                    <Carousel.Item interval={1200} >
                        <div className='row g-4 g-sm-3 m-0 px-4 justify-content-center align-items-center' >
                            <div className='col-sm-6  text-center'>
                                <img src={img1} alt="" width="70%" className='rounded' />
                            </div>
                            <div className='col-sm-6 '>
                                <h3>Allina Rahman</h3>
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-secondary' />
                                <h6 className='py-3'>The hotel is very comfortable. Excellent food variety, only precaution is to the ask staff if some dishes are spicy, as the local food is very spicy. Highly recommended.</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <div className='row g-4 g-sm-3 m-0 px-4 justify-content-center align-items-center' >
                            <div className='col-sm-6 text-center'>
                                <img src={img2} alt="" width="70%" className='rounded' />
                            </div>
                            <div className='col-sm-6'>
                                <h3>Israt Jahan</h3>
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <h6 className='py-3'>I stay at Grand Park every time I visit Ctg, be it for business of pleassure. The hotel has warm staff and great food. If you are a fan of South Asian cuisine, especially Sri Lankan you will love this place.</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <div className='row g-4 g-sm-3 m-0 px-4 justify-content-center align-items-center' >
                            <div className='col-sm-6 text-center'>
                                <img src={img3} alt="" width="70%" className='rounded' />
                            </div>
                            <div className='col-sm-6'>
                                <h3>Emon Khan</h3>
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-secondary' />
                                <h6 className='py-3'>I and my wife stayed for a night. Amazing staff members. They are very friendly and welcoming. Breakfast was really good. Rooms were very clean. Would definitely stay there again. -</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Review;