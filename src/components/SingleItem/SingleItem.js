import React, { useState } from 'react';
import { addToDb } from '../../dB';
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
        <div className='row m-0 border-bottom'>
            <div className='col-md-3 border-end  py-4'>
                <h4 className='fw-bold text-center'>{name}</h4>
            </div>
            <div className='col-md-2 border-end  py-4'>
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
                <h4 className='text-center'>{offer ? ((price * cnt) * (offer / 100)) : 0}</h4>
            </div>
            <div className='col-md-2  py-4'>
                <h4 className='text-center' id={id}>{offer ? ((price * cnt) - (price * cnt) * (offer / 100)) : price * cnt}</h4>
            </div>
        </div>
    );
};

export default SingleItem;