import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ServiceById from '../ServiceById/ServiceById';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <section className="container row">
            <div className="col-md-3 col-sm-1">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 col-sm-1">
                <ServiceById></ServiceById>
            </div>
        </section>
    );
};

export default Dashboard;