import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const professorLocations = [
    { id: 1, name: 'Dr. Smith', position: [51.4416, -116.2915], avatar: '/path/to/avatar1.png' },
    { id: 2, name: 'Dr. Jones', position: [51.4426, -116.2935], avatar: '/path/to/avatar2.png' }
];

const Map = () => {
    return (
        <MapContainer center={[51.4416, -116.2915]} zoom={15} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {professorLocations.map(professor => (
                <Marker
                    key={professor.id}
                    position={professor.position}
                    icon={L.icon({
                        iconUrl: professor.avatar,
                        iconSize: [32, 32],
                        iconAnchor: [16, 32], 
                        popupAnchor: [0, -32] 
                    })}
                >
                    <Popup>
                        <strong>{professor.name}</strong>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
