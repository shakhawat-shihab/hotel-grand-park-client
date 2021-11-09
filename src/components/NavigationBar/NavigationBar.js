import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo_name from '../../images/logo-name.png'
import { HiMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import './NavigationBar.css';
import useAuth from '../../hooks/useAuth';
import { GrEdit, GrPerformance } from "react-icons/gr";
import { GoSignOut } from "react-icons/go";
import login from '../../images/login.png';
import loginLock from '../../images/log-in-lock.png';
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { getDataFromDb } from '../../dB';
const NavigationBar = () => {
    const { user, logOut, admin } = useAuth();
    const [pos, setPos] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [showManage, setShowManage] = useState(false);
    const [cartLength, setCartLength] = useState(0);
    //pos changes with scroll, this is why add it as dependency 
    useEffect(() => {
        const data = getDataFromDb();
        const keys = Object.keys(data);
        setCartLength(keys.length);
    }, [pos])
    function scrollOccured() {
        if (window.pageYOffset >= 10) {
            setPos(true);
        } else {
            setPos(false);
        }
    }
    window.addEventListener('scroll', scrollOccured);
    return (
        <div style={{ position: 'relative' }}>
            <div className=' py-1 bg-dark text-white text-center'>
                <span>
                    <span id='email-org'>
                        <HiMail className='fs-5 me-1 ' />
                        Email: support@hotel-grand-park.org
                    </span>
                    <span id='phone-org'>
                        <FiPhoneCall className=' ms-4 me-2' />
                        Call Us: 01849258038
                    </span>
                </span>
            </div>
            <Navbar collapseOnSelect expand="md" variant="light"
                className={'px-3 px-md-5 py-0 fixed-top' + (pos ? ' bg-nav-2 top-2 ' : ' bg-nav-1 top-1 ')}
            >
                {/* <Container> */}
                <Navbar.Brand as={NavLink} to='/home' className='py-0'>
                    <img src={logo_name} alt="Hospice logo" width='145px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to='/home' activeClassName="selected"  >
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/services' activeClassName="selected"  >
                            Services
                        </Nav.Link>
                        {
                            (user.displayName || user.email)
                                ?
                                <>
                                    {
                                        admin && <NavDropdown
                                            title={
                                                <div className='h-100 d-flex align-items-center  '>
                                                    Manage
                                                </div>
                                            }
                                            className='m-0'
                                            id="collasible-nav-dropdown"
                                            show={showManage}
                                            onMouseEnter={() => { setShowManage(true) }}
                                            onMouseLeave={() => { setShowManage(false) }}
                                        >
                                            <NavDropdown.Item as={NavLink} to='/manage-orders' activeClassName="selected"  >
                                                <MdOutlineManageAccounts />
                                                <span className='ps-2'> Manage Orders </span>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item as={NavLink} to='/add-service' activeClassName="selected"  >
                                                <AiOutlineFileAdd />
                                                <span className='ps-2'> Add Service </span>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    }

                                    <Nav.Link as={NavLink} to='/my-order' activeClassName="selected"  >
                                        <div className="position-relative d-flex cursor-pointer">
                                            {

                                                <span className="bg-primary p-little rounded-circle fw-bold text-white position-absolute positioning">{cartLength}</span>
                                            }
                                            <BsFillCartFill className='fs-3' />
                                        </div>
                                    </Nav.Link>
                                    <NavDropdown
                                        title={
                                            <div className='h-100 d-flex align-items-center  '>
                                                {
                                                    user.photoURL
                                                        ?
                                                        <img src={user.photoURL} alt="" width='55px' height='40px' className='rounded-circle ' />
                                                        :
                                                        <img src={login} alt="" width='55px' />
                                                }
                                            </div>
                                        }
                                        show={showUser}
                                        onMouseEnter={() => { setShowUser(true) }}
                                        onMouseLeave={() => { setShowUser(false) }}
                                        className='m-0'
                                        id="collasible-nav-dropdown" >
                                        <NavDropdown.Item as={NavLink} to='/profile' activeClassName="selected" >
                                            <GrEdit />
                                            {
                                                // !isLoading &&
                                                <span className='ps-2'>
                                                    {
                                                        user.displayName ?
                                                            user.displayName.substr(0, user?.displayName.indexOf(' ')) :
                                                            user.displayName
                                                    }
                                                </span>
                                            }
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={NavLink} to='/settings' activeClassName="selected"  >
                                            <GrPerformance />
                                            <span className='ps-2'> Setttings </span>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={NavLink} to='/login' activeClassName="selected" onClick={logOut}  >
                                            <GoSignOut />
                                            <span className='ps-2'> Log Out </span>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                                :
                                <Nav.Link as={NavLink} to='/login' activeClassName="selected" className='special-link-style ' >
                                    <OverlayTrigger placement='bottom-end' overlay={<Tooltip id="tooltip-disabled">Log In</Tooltip>}>
                                        <div className='h-100 d-flex align-items-center'>
                                            <img src={loginLock} alt="" width='55px' height='40px' />
                                        </div>
                                    </OverlayTrigger>
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar >
        </div>
    );
};

export default NavigationBar;