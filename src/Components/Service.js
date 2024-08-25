import React from 'react';
import '../Styles/Service.css';

function Service() {
    return (
        <section className="service" id="service">
        <div className="section__container service__container">
            <div className="service__content">
                <p className="section__subheader">SERVICES</p>
                <h2 className="section__header">Strive Only For The Best.</h2>
                <ul className="service__list">
                    <li>
                        <span><i className="ri-shield-star-line"></i></span> High Class Security
                    </li>
                    <li>
                        <span><i className="ri-24-hours-line"></i></span> 24 Hours Room Service
                    </li>
                    <li>
                        <span><i className="ri-restaurant-2-fill"></i></span> Restaurant
                    </li>
                    <li>
                        <span><i className="ri-map-2-line"></i></span> Tourist Guide Support
                    </li>
                </ul>
            </div>
        </div>
    </section>
    );
}

export default Service;
