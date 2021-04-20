import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 p-4">
            <div className="card text-center">
                <img style={{ height: '250px' }} src={service.img} alt="" />
                <h1 className="mt-3 mb-3 text-success">{service.name}</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <h2>Price: $ {service.price}</h2>
                <Link to='/dashboard'>
                    <button className="btn btn-primary">Buy Now</button>
                </Link>
            </div>
        </div>

    );
};

export default ServiceDetail;