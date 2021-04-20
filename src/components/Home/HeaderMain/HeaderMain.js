import React from 'react';
import chair from '../../../images/chair.png';
import kids from '../../../images/kids.jpg';
const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-12 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Welcome to Our <br /> Daycare</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>

                <p className="text-secondary">

                    liquam et eros maximus, venenatis nibh eu, vestibulum ligula. Cras euismod placerat consequat. Phasellus non ante at nisl iaculis dignissim nec at lorem. Sed dictum et turpis quis porta. Praesent.</p>
                <button className="btn btn-primary">READ MORE</button>
            </div>
            <div className="col-md-6 col-sm-12">
                <img src={kids} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;