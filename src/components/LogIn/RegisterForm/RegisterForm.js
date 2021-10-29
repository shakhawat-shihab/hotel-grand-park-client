import React, { useState } from 'react';
import { Form, InputGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import { BiShow, BiHide } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { ImInfo } from "react-icons/im";
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
const RegisterForm = () => {
    const { createUserByEmailPassword, setUser, updateProfileName } = useAuth();
    const [userValidity, setUserValidity] = useState(0);
    const [emailValidity, setEmailValidity] = useState(0);
    const [passwordValidity, setPasswordValidity] = useState(0);
    const [passwordValidity1, setPasswordValidity1] = useState(0);
    const [agree, setAgree] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const history = useHistory();
    function handleCreateUserByEmailPassword() {
        //spcae is concatinated as we must need a single space to identify first name. 
        const name = document.getElementById('name').value.concat(" ");
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('pass').value;
        // console.log(email, password, agree, passwordValidity1);
        if (userValidity === 1 && emailValidity === 1 && passwordValidity === 1 && passwordValidity1 === 1 && agree === true) {
            createUserByEmailPassword(email, password, name)
                .then(result => {
                    const newUser = {
                        ...result.user,
                        displayName: name
                    }
                    setUser(newUser);
                    updateProfileName(name);
                    history.push('/home');
                    swal({
                        title: "Your Account Created Successfully!",
                        icon: "success",
                        button: "Ok",
                    });
                })
                .catch(e => {
                    swal({
                        title: e.message,
                        icon: "error",
                        buttons: true,
                        dangerMode: true,
                    })
                })
        }
        else {
            swal({
                title: "Fill all the column according to our rules and Agree our terms",
                icon: "error",
                buttons: true,
                dangerMode: true,
            })
        }
        // createUserByEmailPassword(email, password, name)
        //     .then(result => {
        //         const newUser = {
        //             ...result.user,
        //             displayName: name
        //         }
        //         setUser(newUser);
        //         updateProfileName(name);
        //         history.push('/home');
        //         swal({
        //             title: "Your Account Created Successfully!",
        //             icon: "success",
        //             button: "Ok",
        //         });
        //     })
        //     .catch(e => {
        //         swal({
        //             title: e.message,
        //             icon: "error",
        //             buttons: true,
        //             dangerMode: true,
        //         })
        //     })
    }
    function handlePasswordVisibility(val) {
        val === 'first' ? setVisible(!visible) : setVisible1(!visible1);
    }
    function testUserNameValidity(e) {
        e.target.value.trim().length > 3 ? setUserValidity(1) : setUserValidity(-1);
    }
    function testEmailValidity(e) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(String(e.target.value).toLowerCase()) ? setEmailValidity(1) : setEmailValidity(-1);
    }
    function testPassswordValidity(e) {
        //  Min 8 letter password, with at least a symbol, upper and lower case letters and a number
        // const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        re.test(e.target.value) ? setPasswordValidity(1) : setPasswordValidity(-1);
        //password change means re enter is mismatched
        setPasswordValidity1(-1);
    }
    function testMatchPassswordValidity(e) {
        const rePass = document.getElementById('pass').value;
        // console.log('prvs', rePass);
        rePass === e.target.value ? setPasswordValidity1(1) : setPasswordValidity1(-1);
    }
    function testAgree(e) {
        setAgree(!agree);
    }
    const popoverUserName = (
        <Popover id="popover-basic">
            <Popover.Body>
                Username must be at least 3 characters long.
            </Popover.Body>
        </Popover>
    );
    const popoverEmail = (
        <Popover id="popover-basic">
            <Popover.Body>
                We are so smart to identify valid email.
            </Popover.Body>
        </Popover>
    );
    const popoverPassword = (
        <Popover id="popover-basic">
            <Popover.Body>
                Min. 8 letter password, with at least a symbol, upper and lower case letters and a number
            </Popover.Body>
        </Popover>
    );
    const popoverPassword1 = (
        <Popover id="popover-basic">
            <Popover.Body>
                Password must match previous one.
            </Popover.Body>
        </Popover>
    );
    return (
        <div>
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="name" placeholder="User name" onChange={testUserNameValidity} />
                <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverUserName}>
                    <div className='ps-1'>
                        {/* <Button variant="success">Click me to see</Button> */}
                        {userValidity === 0 && <ImInfo className='h-100 fs-3 text-dark'>
                        </ImInfo>}
                        {userValidity === 1 && <BsFillCheckCircleFill className='h-100 fs-3 text-success' />}
                        {userValidity === -1 && <MdError className='h-100 fs-2 text-danger' />}
                    </div>
                </OverlayTrigger>
            </InputGroup>
            {/* email address */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="email" placeholder="Email Address" onChange={testEmailValidity} />
                <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverEmail}>
                    <div className='ps-1'>
                        {emailValidity === 0 && <ImInfo className='h-100 fs-3 text-dark' />}
                        {emailValidity === 1 && <BsFillCheckCircleFill className='h-100 fs-3 text-success' />}
                        {emailValidity === -1 && <MdError className='h-100 fs-2 text-danger' />}
                    </div>
                </OverlayTrigger>
            </InputGroup>
            {/* password  */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible ? 'text' : 'password'} id="pass" placeholder="Password" onChange={testPassswordValidity} />
                <InputGroup.Text className='bg-white' onClick={() => { handlePasswordVisibility('first') }} > {visible ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
                <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverPassword}>
                    <div className='ps-1'>
                        {passwordValidity === 0 && <ImInfo className='h-100 fs-3 text-dark' />}
                        {passwordValidity === 1 && <BsFillCheckCircleFill className='h-100 fs-3 text-success' />}
                        {passwordValidity === -1 && <MdError className='h-100 fs-2 text-danger' />}
                    </div>
                </OverlayTrigger>
            </InputGroup>
            {/* reenter password */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible1 ? 'text' : 'password'} id="re-pass" placeholder="Reenter Password" onChange={testMatchPassswordValidity} />
                <InputGroup.Text className='bg-white' onClick={() => handlePasswordVisibility('second')} > {visible1 ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
                <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverPassword1}>
                    <div className='ps-1'>
                        {passwordValidity1 === 0 && <ImInfo className='h-100 fs-3 text-dark' />}
                        {passwordValidity1 === 1 && <BsFillCheckCircleFill className='h-100 fs-3 text-success' />}
                        {passwordValidity1 === -1 && <MdError className='h-100 fs-2 text-danger' />}
                    </div>
                </OverlayTrigger>
            </InputGroup>
            {/* register button */}
            <Form.Group className="my-3 " controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Agree to Terms & Cnditions" required onClick={testAgree} />
            </Form.Group>
            <button className='w-100 my-3 btn btn-outline-info fw-bold' onClick={handleCreateUserByEmailPassword}>
                Register
            </button>
        </div>
    );
};

export default RegisterForm;