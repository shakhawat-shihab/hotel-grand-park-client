import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { GoLocation } from "react-icons/go";

const Footer = () => {
    return (
        <div className='' >
            <div className='row m-0 bg-dark py-3 '>
                <div className='col-lg-6 col-md-6 col-sm-5 col-12 d-flex  justify-content-center'>
                    <div>
                        <h3 className='text-primary text-center'>Location</h3>
                        <img src='https://i.ibb.co/s6gCyPT/location.webp' alt="" width='250px' height='200px' />
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-7 col-12 d-flex  justify-content-center align-items-center'>
                    <div className='px-3 px-sm-0'>
                        <h3 className='text-primary my-4'>Address</h3>
                        <h6 className='text-white my-3'> <GoLocation className=" fs-3 pe-2 text-warning" />
                            Hotel grand Park, Opposite of Tiger Pass, Chattogram 4400</h6>
                        <h6 className='text-white my-3'>  <FiPhoneCall className=" fs-3 pe-2 text-warning" /> +801849258038</h6>
                        <h6 className='text-white my-3'> <GrMail className=" fs-3 pe-2 text-warning" /> support@hotel-grand-park.org</h6>
                    </div>
                </div>
            </div>
            <p className='py-4 border-top bg-dark text-center text-info m-0 fs-5'>
                2021 @ <span className='text-danger'>Shakhawat Shihab</span>  - All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;