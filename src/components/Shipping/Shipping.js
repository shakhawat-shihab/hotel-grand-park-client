import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { clearTheDd, getDataFromDb } from '../../dB';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
const Shipping = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const product = getDataFromDb();
    const { user } = useAuth();
    const onSubmit = data => {
        const keys = Object.keys(product);
        if (keys.length) {
            data.product = product;
            data.status = 'pending';
            console.log(data);
            // https://hotel-grand-park.herokuapp.com/placeOrder   https://hotel-grand-park.herokuapp.com/addService
            axios.post('https://hotel-grand-park.herokuapp.com/placeOrder', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Your Order is placed successfully. We will contact with you soon');
                        clearTheDd();
                        reset();
                    }
                })
        }
        else {
            swal({
                title: 'Your cart is empty!!',
                icon: "error",
                buttons: true,
                dangerMode: true,
            })
            history.push('/home')
        }
    };
    return (
        <div className='mt-4 pt-5'>
            {/* <h2>This is shipping</h2> */}
            <div className='row m-0 g-0 justify-content-center my-4'>
                <div className=" col-10 s shadow-lg rounded-3 p-3 p-sm-4 header-bg ">
                    <h3 className="text-center pb-4 ">Biller Address & Payment</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingName" placeholder="Enter your name"
                                value={user.displayName} readOnly
                                {...register("name", { required: true })} />
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput"
                                placeholder="name@example.com" value={user.email} readOnly
                                {...register("email", { required: true })} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="telephone" className="form-control" id="floatingPhone"
                                placeholder="Enter Phone Number"
                                {...register("phone", { required: true })} />
                            <label htmlFor="floatingPhone">Phone</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" list="datalistOptions" id="detailsAddress"
                                placeholder="Enter Your Address" type="text"
                                {...register("address", { required: true })} />
                            <label htmlFor="detailsAddress">Area, Union, District</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" list="datalistOptions" id="division"
                                placeholder="Enter Your Division" type="text"
                                {...register("division", { required: true })} />
                            <label htmlFor="locationInput">Division</label>
                            <datalist id="division">
                                <option value="Dhaka" />
                                <option value="Chittagong" />
                                <option value="Rajshahi" />
                                <option value="Khulna" />
                                <option value="Sylhet" />
                                <option value="Barisal" />
                                <option value="Rangpur" />
                                <option value="Mymensingh" />
                            </datalist>
                        </div>
                        <fieldset>
                            <legend>Select Payment</legend>
                            <p>
                                <label htmlFor="bkash" className='px-2'>
                                    <input type="radio" name="payment" value="bkash"
                                        id="bkash"
                                        {...register("payment", { required: true })} />
                                    bKash
                                </label>
                                {/* <br /> */}
                                <label htmlFor="rocket" className='px-2'>
                                    <input type="radio" name="payment" value="rocket"
                                        id="rocket"
                                        {...register("payment", { required: true })} />
                                    Rocket
                                </label>
                                {/* <br /> */}
                                <label htmlFor="card" className='px-2'>
                                    <input type="radio" name="payment" value="card"
                                        id="card"
                                        {...register("payment", { required: true })} />
                                    Card
                                </label>
                                {/* <br /> */}
                                <label htmlFor="other" className='px-2'>
                                    <input type="radio" name="payment" value="other"
                                        id="other"
                                        {...register("payment", { required: true })} />
                                    Others
                                </label>
                            </p>
                        </fieldset>
                        <div className="form-floating mb-3">
                            <input className="form-control" list="datalistOptions" id="transaction"
                                placeholder="Enter Your transaction id" type="text"
                                {...register("transaction", { required: true })} />
                            <label htmlFor="transaction">Transaction ID</label>
                        </div>
                        <div className="form-floating mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                    checked readOnly />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    I accept to the terms
                                </label>
                            </div>
                        </div>
                        <div className='text-center'>
                            <input type="submit" value='Confirm Order' />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Shipping;