import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import SingleItem from '../SingleItem/SingleItem';
import { BsFillCartCheckFill } from 'react-icons/bs';
const MyOrders = () => {
    const { cart, setCart, isLoadingCart } = useCart();
    const [total, setTotal] = useState();
    console.log(cart, isLoadingCart)
    useEffect(() => {
        let sum = 0;
        for (const iterator of cart) {
            // console.log(iterator);
            if (iterator.offer) {
                sum += iterator.price * iterator.count - ((iterator.price * iterator.count) * (iterator.offer / 100));
            }
            else {
                sum += iterator.price * iterator.count;
            }
        }
        setTotal(sum);
    }, [cart])
    //called from child component
    function findInCart(id, num) {
        let index = 0;
        let newArr;
        for (const elem of cart) {
            console.log(elem);
            if (elem.id === id) {
                break;
            }
            index++;
        }
        cart[index].count = num;
        newArr = [...cart];
        console.log(newArr);
        setCart(newArr);
    }

    return (
        <div className='mt-5 pt-4'>
            <h1>My Orders</h1>
            {
                isLoadingCart === false ?
                    cart.length
                        ?
                        <div className='row g-0 justify-content-center mb-5'>
                            <div className='col-11 col-md-11 '>
                                <div className='row m-0 g-0 border-bottom text-center'>
                                    <div className='col-md-10 col-9 border-end py-2'>
                                        <h4 className='fw-bold text-primary'>Description</h4>
                                    </div>
                                    <div className='col-md-2 col-3 py-2'>
                                        <h4 className='fw-bold text-primary'>Total</h4>
                                    </div>
                                </div>
                                {

                                    cart.map(x => <SingleItem key={x.id} data={x} eventHandler={findInCart}></SingleItem>)

                                }
                                <div className='row m-0 border-bottom text-center'>
                                    <div className='col-10 border-end py-2 d-flex justify-content-end'>
                                        <h4 className='fw-bold text-primary'>Total Cost</h4>
                                    </div>
                                    <div className='col-2 py-2'>
                                        <h4 className='fw-bold text-primary' id='grand-total'>
                                            {
                                                total
                                            }
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-center py-4' >
                                <Button variant='primary' className='ms-4' >
                                    Place Order
                                    <BsFillCartCheckFill className='ps-2 fs-3' />
                                </Button>
                            </div>
                        </div>
                        :
                        <div style={{ height: '70vh' }} className='d-flex align-items-center justify-content-center' >
                            <h1 className='text-secondary'>
                                Your cart is empty!!
                            </h1>
                        </div>
                    :
                    <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                        <Spinner animation='grow'></Spinner>
                    </div>
            }
        </div>
    );
};

export default MyOrders;