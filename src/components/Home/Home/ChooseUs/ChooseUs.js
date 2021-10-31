import React, { useState } from 'react';
import swim from '../../../../images/Swim.png';
import gym from '../../../../images/Gym2.png';
import conf from '../../../../images/Conf2.png';
import kitchen from '../../../../images/kitchen.png';
import './ChooseUs.css';
import swimmPic from '../../../../images/swim-pic.jpg';
import musclePic from '../../../../images/muscle-pic.jpg';
import confPic from '../../../../images/conf-pic.jpg';
import foodPic from '../../../../images/food-pic.jpg';

const ChooseUs = () => {
    const [imgVal, setImgVal] = useState(swimmPic);
    console.log(imgVal);
    return (
        <div className='my-5 pt-3'>
            <h2 className='text-center mt-3'>Why Choose Us</h2>
            <p className='text-center px-2 px-md-4'>Hotel Grand Park aims to exceed all expectations as we welcome guests from around the globe. With this in mind, you will find our business and recreation facilities prepare you to take on the world - or the bustle of busy city.</p>
            <div className='row m-0 g-3 px-2 align-items-center'>
                <div className='col-md-6'>
                    <img src={imgVal} alt="demo images" width='100%' className='rounded' />
                </div>
                <div className='col-md-6'>
                    <div className='feature-item rounded shadow-sm row g-3 m-0 align-items-center justify-content-center mb-2' onClick={() => { setImgVal(swimmPic) }}>
                        <div className='col-2 col-lg-1'>
                            <img src={swim} alt="swim" width='100%' />
                        </div>
                        <div className='col-10'>
                            <h5 className='m-0 py-2'>Swimming Pool</h5>
                            <p>Hotel Grand Park  is proud to house the most sophisticated hotel swimming pool in Ctg city.</p>
                        </div>
                    </div>
                    <div className='feature-item rounded shadow-sm row g-3 m-0 align-items-center justify-content-center mb-2' onClick={() => { setImgVal(musclePic) }}>
                        <div className='col-2 col-lg-1'>
                            <img src={gym} alt="gym" width='100%' />
                        </div>
                        <div className='col-10'>
                            <h5 className='m-0 py-2'>Gymnasium</h5>
                            <p>Hotel Grand Park Gymnasium embraces its guests with an energetic aura and vibrant environment.</p>
                        </div>
                    </div>
                    <div className='feature-item rounded shadow-sm row g-3 m-0 align-items-center justify-content-center mb-2' onClick={() => { setImgVal(confPic) }}>
                        <div className='col-2 col-lg-1 '>
                            <img src={conf} alt="conferenece" width='100%' />
                        </div>
                        <div className='col-10'>
                            <h5 className='m-0 py-2'>Conference Room</h5>
                            <p>Our mission conference room is most suitable for conference, Seminar or Brain storming Sessions.</p>
                        </div>

                    </div>
                    <div className='feature-item rounded shadow-sm row g-3 m-0 align-items-center justify-content-center mb-2' onClick={() => { setImgVal(foodPic) }}>
                        <div className='col-2 col-lg-1 '>
                            <img src={kitchen} alt="food" width='100%' />
                        </div>
                        <div className='col-10'>
                            <h5 className='m-0 py-2'> Restaurant</h5>
                            <p>
                                Bell’s Diner welcomes our guests in its beautiful interior and buffet food arrangement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;