import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://hotel-grand-park.herokuapp.com/addService', data)
            .then(res => {
                // console.log('new ', res?.data?.insertedId);
                // console.log('already have this id', res?.data);
                if (res?.data === 'already have this id') {
                    swal({
                        title: 'A entry is already inserted with this ID in the Database!',
                        icon: "error",
                        buttons: true,
                        dangerMode: true,
                    })
                }
                else if (res?.data?.insertedId) {
                    swal({
                        title: "The Service is successfully added",
                        icon: "success",
                        button: "Ok",
                    });
                    reset();
                }
            })
    };
    const visibile = {
        visibility: 'visible'
    }
    const invisibile = {
        visibility: 'hidden'
    }
    return (
        <div className='mt-4 pt-5'>
            <div className='row m-0 g-0 justify-content-center my-4'>
                <div className=" col-10 s shadow-lg rounded-3 p-3 p-sm-4 header-bg ">
                    <h3 className="text-center pb-4 ">Add a Service</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" placeholder="Enter Service Id"
                                {...register("id", { required: true })} />
                            <label htmlFor="floatingName">Service Id (must be unique)</label>
                            <span style={errors.id ? visibile : invisibile} className='text-danger ps-2' >* Enter an unique id</span>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" placeholder="Enter Service Name"
                                {...register("name", { required: true })} />
                            <label htmlFor="floatingName">Service Name</label>
                            <span style={errors.name ? visibile : invisibile} className='text-danger ps-2' >* Enter an approiate name</span>
                        </div>
                        <div className="form-floating mb-2">
                            {/* <input type="text" className="form-control" placeholder="Enter Service Name"
                                {...register("name", { required: true })} /> */}

                            <select {...register("type", { required: true })} className="form-control">
                                <option value="room">Room</option>
                                <option value="transport">Transport</option>
                                <option value="guide">Guide</option>
                            </select>
                            <label htmlFor="floatingName">Service Type</label>
                            <span style={errors.type ? visibile : invisibile} className='text-danger ps-2' >* Choose a category</span>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" placeholder="Enter Description"
                                {...register("description", { required: true })} />
                            <label htmlFor="floatingInput">Description</label>
                            <span style={errors.description ? visibile : invisibile} className='text-danger ps-2' >* Enter a little description</span>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="number" className="form-control" step="0.01"
                                placeholder="Enter Price"
                                {...register("price", { required: true })} />
                            <label htmlFor="floatingPhone">Price</label>
                            <span style={errors.price ? visibile : invisibile} className='text-danger ps-2' >* Enter the price</span>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" step="0.01"
                                placeholder="Enter offer"
                                {...register("offer", { required: false })} />
                            <label htmlFor="floatingPhone">Offer (discount in percent)</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control"
                                placeholder="Enter image"
                                {...register("image", { required: true })} />
                            <label htmlFor="floatingPhone">Image Url</label>
                            <span style={errors.image ? visibile : invisibile} className='text-danger ps-2' >* Enter the image url</span>
                        </div>
                        <div className='text-center'>
                            <input type="submit" value='Add Service' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;