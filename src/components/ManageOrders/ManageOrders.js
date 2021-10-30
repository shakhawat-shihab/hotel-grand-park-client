import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAllOrder from '../../hooks/useAllOrders';

const ManageOrders = () => {
    const { allOrder, isLoadingAllOrder } = useAllOrder();
    console.log(allOrder);
    return (
        <div className='mt-5 pt-4'>
            <h3 className='text-center fw-bold my-4'>Manage Orders</h3>
            {
                isLoadingAllOrder === false
                    ?
                    <div className='row g-0 justify-content-center mb-5'>
                        <div className='col-11 col-md-11 '>
                            <div className='row m-0 g-0 border-bottom border-top border-2 border-dark text-center'>
                                <div className='col-md-10 col-9 border-end border-2 border-dark py-2'>
                                    <h4 className='fw-bold text-primary'>Orders</h4>
                                </div>
                                <div className='col-md-2 col-3 py-2'>
                                    <h4 className='fw-bold text-primary'>Manage</h4>
                                </div>
                            </div>
                            {/* {
                                cart.map(x => <SingleItem key={x.id} data={x} eventHandler={findInCart}></SingleItem>)
                            } */}
                        </div>
                    </div>
                    :
                    <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                        <Spinner animation='grow'></Spinner>
                    </div>
            }
        </div>
    );
};

export default ManageOrders;