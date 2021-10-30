
const SingleOrder = (props) => {
    console.log(props.data)
    const { _id, name, email, status, address, division, transaction } = props.data;
    return (

        <div className='row m-0 border-bottom border-2 border-dark g-0'>
            <div className='col-md-10 col-9 border-end border-2 border-dark  py-4'>
                <h5 className='fw-bold'> Order Id: <small  > #{_id.substr(0, 12)}...</small> </h5>
                <h5>Name: {name}</h5>
                <h5>Email: {email}</h5>
                <h5>Address: <small>{address}, {division}</small> </h5>
                <h5>Transaction Id: {transaction}</h5>
                {
                    props.data?.items
                    &&
                    <div className='row g-0 m-0 py-3 align-items-center justify-content-center py-3'>
                        <h4 className='fw-bold'>Booking:</h4>
                        <div className='col-9'>
                            <ul>
                                {
                                    props.data.items?.map(x => <li className='py-2' key={x._id}>
                                        <h5 className='text-capitalize'>
                                            {x.name}
                                        </h5>
                                        <h5>
                                            x {x.count}
                                        </h5> </li>)
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <div className='col-md-2 col-3  d-flex align-items-center justify-content-center '>
                <h4 className='text-center text-capitalize'>
                    <span className={status === 'pending' ? 'text-warning' : 'text-success'}>{status}</span>
                </h4>
            </div>
        </div>
    );
};

export default SingleOrder;