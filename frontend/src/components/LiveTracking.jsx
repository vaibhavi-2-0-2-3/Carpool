import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 15.4909,   // Initial latitude
    lng: 73.8278,   // Initial longitude
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({
          lat: latitude,
          lng: longitude,
        });
      });
    }, 10000); // 10 seconds interval

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <MapContainer
      center={currentPosition}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={currentPosition}>
        <Popup>
          Current Position: <br />
          Latitude: {currentPosition.lat} <br />
          Longitude: {currentPosition.lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LiveTracking;
