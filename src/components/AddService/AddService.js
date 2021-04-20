import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
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
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input onBlur={handleBlur} type="text" name="name" class="form-control" placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail">Description</label>
                        <input onBlur={handleBlur} type="text" name="description" class="form-control" placeholder="Write Description" />
                    </div>
                    <div class="form-group mb-2">
                        <label for="exampleInputPassword1">Upload Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" placeholder="Picture" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;