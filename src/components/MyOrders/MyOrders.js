import React, { useEffect, useState } from 'react';
import { Button, Nav, Spinner } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import SingleItem from '../SingleItem/SingleItem';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useHistory } from 'react-router';
import useMyOrder from '../../hooks/useMyOrder';
const MyOrders = () => {
    const history = useHistory();
    const [nav, setNav] = useState({ cartOrder: true, placedOrder: false });
    const { myOrder, setMyOrder, isLoadingMyOrder } = useMyOrder();
    console.log(myOrder);
    const { cart, setCart, isLoadingCart } = useCart();
    const [total, setTotal] = useState();
    // console.log(cart, isLoadingCart)
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
    //for the navigation
    const handleSelect = (eventKey) => {
        // console.log(eventKey);
        if (eventKey === '1') {
            setNav({ cartOrder: true, placedOrder: false });
        }
        else if (eventKey === '2') {
            setNav({ cartOrder: false, placedOrder: true });
        }
    }
    const goToShipping = () => {
        history.push('/shipping');
    }
    return (
        <div className='mt-5 pt-4'>
            <h2 className='text-center fw-bold my-4'>My Orders</h2>
            <Nav variant="pills" className="justify-content-center my-3 " onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link active={nav?.cartOrder} eventKey="1" >
                        My Cart
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={nav?.placedOrder} eventKey="2" >
                        Placed Orders
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {
                nav.cartOrder
                    ?
                    isLoadingCart === false
                        ?
                        cart.length
                            ?
                            <div className='row g-0 justify-content-center mb-5'>
                                <div className='col-11 col-md-11 '>
                                    <div className='row m-0 g-0 border-bottom border-top border-2 border-dark text-center'>
                                        <div className='col-md-10 col-9 border-end border-2 border-dark py-2'>
                                            <h4 className='fw-bold text-primary'>Description</h4>
                                        </div>
                                        <div className='col-md-2 col-3 py-2'>
                                            <h4 className='fw-bold text-primary'>Total</h4>
                                        </div>
                                    </div>
                                    {
                                        cart.map(x => <SingleItem key={x.id} data={x} eventHandler={findInCart}></SingleItem>)
                                    }
                                    <div className='row m-0 border-bottom border-2 border-dark text-center'>
                                        <div className='col-9 col-md-10 border-end border-2 border-dark py-2 d-flex justify-content-end'>
                                            <h4 className='fw-bold text-primary'>Total Cost</h4>
                                        </div>
                                        <div className='col-3 col-md-2 py-2'>
                                            <h4 className='fw-bold text-primary' id='grand-total'>
                                                {
                                                    total
                                                }
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 d-flex justify-content-center py-4' >
                                    <Button variant='primary' className='ms-4' onClick={goToShipping} >
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
                    :
                    <div className='mt-5 pt-5 text-center' style={{ height: '70vh' }}>
                        <h1 className='text-secondary'>
                            Coming Soon!!
                        </h1>
                    </div>
            }
        </div>
    );
};

export default MyOrders;