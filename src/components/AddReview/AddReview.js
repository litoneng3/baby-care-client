import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddReview = () => {

    const [review, setReview] = useState({});
    const handleOnBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }


    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('name', review.name);
        formData.append('email', review.email);
        formData.append('message', review.message);


        fetch("http://localhost:5000/addReview", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <h2>Add a Review</h2>
                <form onSubmit={handleSubmit}>
                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleOnBlur} type="email" name="email" class="form-control" placeholder="Enter email" />

                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleOnBlur} type="text"name="name" class="form-control" placeholder="Enter your Name" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleFormControlTextarea1">Write your Review</label>
                        <textarea onBlur={handleOnBlur} name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>

    );
};

export default AddReview;