import React from 'react';
import cavity from '../../../images/caviry.png';
import fluoride from '../../../images/floride.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import abc from '../../../images/abc.png';
import nursery from '../../../images/nursery.png';
import pencil from '../../../images/pencil.png';

const Services = () => {
    const serviceData = [
        {
            name: 'Daycare',
            img: abc,
            price: 200,
        },
        {
            name: 'Nursery',
            img: nursery,
            price: 300
        },
        {
            name: 'After School',
            img: pencil,
            price: 350
        }
    ]

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;