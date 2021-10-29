import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import SingleItem from '../SingleItem/SingleItem';

const MyOrders = () => {
    const { cart, setCart } = useCart();
    const [total, setTotal] = useState();
    console.log(cart)
    useEffect(() => {
        let sum = 0;
        for (const iterator of cart) {
            console.log(iterator);
            if (iterator.offer) {
                sum += iterator.price * iterator.count - ((iterator.price * iterator.count) * (iterator.offer / 100));
            }
            else {
                sum += iterator.price * iterator.count;
            }
        }
        setTotal(sum);
    }, [cart])
    //called from child
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
            <div className='row justify-content-center m-0'>
                <div className='col-11 '>
                    <div className='row m-0 border-bottom text-center'>
                        <div className='col-md-3 border-end py-2'>
                            <h4 className='fw-bold text-primary'>Name</h4>
                        </div>
                        <div className='col-md-2 border-end py-2'>
                            <h4 className='fw-bold text-primary'>Price</h4>
                        </div>
                        <div className='col-md-2 border-end py-2'>
                            <h4 className='fw-bold text-primary'>Quantity</h4>
                        </div>
                        <div className='col-md-2 border-end py-2'>
                            <h4 className='fw-bold text-primary'>Discount</h4>
                        </div>
                        <div className='col-md-2 py-2'>
                            <h4 className='fw-bold text-primary'>Total</h4>
                        </div>
                    </div>
                    {
                        cart.map(x => <SingleItem key={x.id} data={x} eventHandler={findInCart}></SingleItem>)
                    }
                    <div className='row m-0 border-bottom text-center'>
                        <div className='col-md-9 border-end py-2'>
                            <h4 className='fw-bold text-primary'>Total Cost</h4>
                        </div>
                        <div className='col-md-2 py-2'>
                            <h4 className='fw-bold text-primary' id='grand-total'>
                                {
                                    total
                                }
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;