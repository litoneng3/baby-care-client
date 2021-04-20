import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUserPlus, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch("https://obscure-journey-67773.herokuapp.com/isAdmin", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })
    }, []);


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add a Review</span>
                    </Link>
                </li>
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>Add Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/doctor/setting" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                            </Link>
                        </li>
                    </div>
                }

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;