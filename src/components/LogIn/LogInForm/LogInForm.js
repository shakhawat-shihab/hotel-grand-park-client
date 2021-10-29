import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { BiShow, BiHide } from "react-icons/bi";
import './LogInForm.css';
const LogInForm = (props) => {
    window.scrollTo(0, 0);
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handlePasswordVisibility() {
        setVisible(!visible);
    }
    function setValue(e) {
        e.target.id === 'mail' ? setEmail(e.target.value) : setPassword(e.target.value);
    }
    // console.log(email, password);
    return (
        <div >
            {/* enter email */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="mail" placeholder="Email" onBlur={setValue} />
            </InputGroup>
            {/* enter password */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible ? 'text' : 'password'} id="pass" placeholder="Password" onBlur={setValue} />
                <InputGroup.Text className='bg-white' onClick={handlePasswordVisibility} > {visible ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
            </InputGroup>
            {/* enter login */}
            <Form.Group className="my-3 " controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep Me logged in" />
            </Form.Group>
            <button className='w-100 my-3 btn btn-outline-info fw-bold ' onClick={() => { props.clickHandler(email, password) }}>
                Log In
            </button>
        </div>
    );
};

export default LogInForm;