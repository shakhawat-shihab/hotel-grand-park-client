import axios from 'axios';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAllOrder from '../../hooks/useAllOrders';
import SingleOrderWithEvent from '../SingleOrderWithEvent/SingleOrderWithEvent';

const ManageOrders = () => {
    const { allOrder, setAllOrder, isLoadingAllOrder } = useAllOrder();
    console.log(allOrder);

    function handleApprove(id) {
        // console.log(id);
        alert('Are you sure to Approve?')
        const newArr = allOrder.map(x => {
            if (x._id === id) {
                x.status = 'approve';
            }
            return x;
        });
        console.log(newArr);
        fetch(`https://hotel-grand-park.herokuapp.com/updateOrder/${id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approve' })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Successfully updated!");
                    setAllOrder(newArr);
                    // history.push('/users');
                }
            });
    }
    function handleDelete(id) {
        //console.log(id);
        alert('Are you sure to Delete?')
        const newArr = allOrder.filter(x => x._id !== id);
        fetch(`https://hotel-grand-park.herokuapp.com/deleteOrder/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingUsers = allOrder.filter(x => x._id !== id);
                    setAllOrder(remainingUsers)
                }
                setAllOrder(newArr);
            })
    }
    return (
        <div className='mt-5 pt-4'>
            <h3 className='text-center fw-bold my-4'>Manage Orders</h3>
            {
                isLoadingAllOrder === false
                    ?
                    <div className='row g-0 justify-content-center mb-5'>
                        <div className='col-12 px-2 px-md-0 col-md-11 '>
                            <div className='row m-0 g-0 border-bottom border-top border-2 border-dark text-center'>
                                <div className='col-md-10 col-8 border-end border-2 border-dark py-2'>
                                    <h4 className='fw-bold text-primary'>Orders</h4>
                                </div>
                                <div className='col-md-2 col-4 py-2'>
                                    <h4 className='fw-bold text-primary'>Manage</h4>
                                </div>
                            </div>
                            {
                                allOrder.map(x => <SingleOrderWithEvent key={x._id} data={x} eventHandlerDelete={handleDelete} eventHandlerApprove={handleApprove} ></SingleOrderWithEvent>)
                            }
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