import React, { useState } from 'react';
import { addToDb } from '../../dB';
import './SingleItem.css';
const SingleItem = (props) => {
    const { name, price, count, offer, id } = props.data;
    const [cnt, setCnt] = useState(count);
    const decreaseCnt = () => {
        if (cnt > 1) {
            setCnt(cnt - 1);
            addToDb(id, cnt - 1);
            props.eventHandler(id, cnt - 1);
        }
    }
    const increaseCnt = () => {
        setCnt(cnt + 1);
        addToDb(id, cnt + 1);
        props.eventHandler(id, cnt + 1);
    }
    return (
        <div className='row m-0 border-bottom g-0'>
            {/* <div className='col-md-2 col-3 border-end d-flex align-items-center'>
                <h5 className='fw-bold text-center'>{name}</h5>
            </div> */}

            {/* <div className='col-md-2 border-end  py-4'>
                <h4 className='text-center'>{price}</h4>
            </div>
            <div className='col-md-2 border-end  py-4'>
                <div className=' d-flex  d-flex  justify-content-center'>
                    <div className="input-group mb-3 " style={{ width: '112px' }}>
                        <button className="btn btn-outline-secondary" type="button" onClick={decreaseCnt} >-</button>
                        <input type="text" className="form-control fw-bold text-warning bg-white" aria-describedby="button-addon1" readOnly value={cnt} />
                        <button className="btn btn-outline-secondary" type="button" onClick={increaseCnt} >+</button>
                    </div>
                </div>
            </div>
            <div className='col-md-2 border-end  py-4'>
                <h4 className='text-center'>{offer ? ((price * cnt) * (offer / 100)) : 0} <br /> {offer && <small className='fs-6 text-danger' >( {offer}% discount )</small>}  </h4>
            </div> */}
            <div className='col-md-10 col-9 border-end  py-4'>
                {/* details about order */}
                <h3 className='fw-bold'> Service Name: {name}</h3>
                <div className='row g-3 m-0 align-items-center justify-content-center'>
                    <div class=" col-md-6 col-12 form-floating">
                        <input type="date" class="form-control" id="checkInId" />
                        <label for="floatingInput">Chcek in Date</label>
                    </div>
                    <div class=" col-md-6 col-12 form-floating">
                        <input type="date" class="form-control" id="checkOutId" />
                        <label for="floatingInput">Chcek out Date</label>
                    </div>
                </div>
                <div className='row g-0 m-0 py-3 align-items-center justify-content-center'>
                    <div className='col-md-6 col-12 '>
                        <div className='row g-0 m-0 align-items-center justify-content-center'>
                            <h4 className='m-0 col-md-6 col-12 text-center'>Number of rooms</h4>
                            <div className="input-group col-md-6 col-12" style={{ width: '112px' }}>
                                <button className="btn btn-outline-secondary" type="button" onClick={decreaseCnt} >-</button>
                                <input type="text" className="form-control fw-bold text-warning bg-white" aria-describedby="button-addon1" readOnly value={cnt} />
                                <button className="btn btn-outline-secondary" type="button" onClick={increaseCnt} >+</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 '>
                        <h4 className='text-center'>
                            Number of Days : 5
                        </h4>
                    </div>

                </div>
                <div className='d-flex align-items-center justify-content-center py-2'>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td id='demo-td'>
                                    <h5>Unit Price:</h5>
                                </td>
                                <td>
                                    <h5 style={{ textAlign: 'right' }}>
                                        <span className='text-warning fw-bold '>{price}৳</span>
                                    </h5>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <h5>Quantity:</h5>
                                </td>
                                <td>
                                    <h5 style={{ textAlign: 'right' }}>
                                        <span className='text-warning fw-bold '> x {cnt}</span>
                                    </h5>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <h5>Subtotal:</h5>
                                </td>
                                <td>
                                    <h5 style={{ textAlign: 'right' }}>
                                        <span className='text-warning fw-bold '> {parseInt(price) * cnt} ৳</span>
                                    </h5>
                                </td>
                            </tr>
                            <tr className='border-bottom'>
                                <td>
                                    <h5>
                                        Discount: {offer && <small className='text-danger fs-6'> (-{offer} %)</small>}
                                    </h5>
                                </td>
                                <td >
                                    <h5 style={{ textAlign: 'right' }}>
                                        <span className='text-warning fw-bold '>
                                            - {
                                                offer ? Math.floor((parseInt(price) * cnt * offer / 100)) : 0
                                            }
                                            ৳
                                        </span>
                                    </h5>
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    <h5>
                                        Total:
                                    </h5>
                                </td>
                                <td >
                                    <h5 style={{ textAlign: 'right' }}>
                                        <span className='text-warning fw-bold '>
                                            {
                                                offer ? (price * cnt - price * cnt * offer / 100) : price * cnt
                                            }
                                            ৳
                                        </span>
                                    </h5>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
            <div className='col-md-2 col-3  d-flex align-items-center justify-content-center text-warning '>
                <h4 className='text-center ' id={id}>{offer ? ((price * cnt) - (price * cnt) * (offer / 100)) : price * cnt} ৳</h4>
            </div>
        </div>
    );
};

export default SingleItem;