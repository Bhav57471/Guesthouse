import React from 'react';
import '../Styles/Service.css';

function Service() {
    return (
        <div className="container" id='services'>
            <div className="bg-image-container">
                <div className="text-container">
                <h1 className="main-title">SERVICES</h1> 
                    <h2 className="subtitle">Strive Only For The Best.</h2> 
                    <ul className="services-list">
                        <li className="service-item">
                            <i className="icon-security" /> High Class Security
                        </li>
                        <li className="service-item">
                            <i className="icon-room-service" /> 24 Hours Room Service
                        </li>
                        <li className="service-item">
                            <i className="icon-restaurant" /> Restaurant
                        </li>
                        <li className="service-item">
                            <i className="icon-tourist-guide" /> Tourist Guide Support
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Service;
