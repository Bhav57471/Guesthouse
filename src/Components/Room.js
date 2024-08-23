import React from 'react';
import rooms from '../Data/Room.json';
import '../Styles/Room.css';

function Room() {
    return (
        <div id='rooms' className="room-cards-container">
            <h2>OUR LIVING ROOM </h2>
            <h1>The Most Memorable Rest Time Starts Here.</h1>
            <div className="room-cards">
                {rooms.map(room => (
                    <div key={room.id} className="room-card">
                        <img src={room.image} alt={room.title} />
                        <h3>{room.title}</h3>
                        <p>{room.description}</p>
                        <p><strong>Starting from {room.price}</strong></p>
                        <button>BOOK NOW</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Room;