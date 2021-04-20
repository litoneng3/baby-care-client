import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {

    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://obscure-journey-67773.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-10 p-4 pr-5 ps-5">
                <h5 className="text-brand">Add an Admin</h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input onBlur={handleBlur} type="text" name="name" class="form-control" placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail">Email</label>
                        <input onBlur={handleBlur} type="email" name="email" class="form-control" placeholder="Enter Email" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;