import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 card text-center">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
            <button className="btn btn-primary btn-sm">Read More</button>
        </div>
    );
};

export default ServiceDetail;