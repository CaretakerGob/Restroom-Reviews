
'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { Review } from '@/lib/mockReviews';
import { useState, useEffect } from 'react';

// This is to fix the default icon issue with Leaflet in some bundlers
// It's important this runs once when the module is loaded.
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


interface InteractiveMapProps {
  reviews: Review[];
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ reviews }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Default center: somewhere in the US
  const defaultPosition: L.LatLngExpression = [39.8283, -98.5795];
  const defaultZoom = 4;

  if (!isClient) {
    // Return null or a placeholder until the component has mounted on the client
    // The parent dynamic import already has a loading state for the initial load.
    // This handles potential re-renders or HMR issues.
    return null; 
  }
  
  return (
    <MapContainer 
        center={defaultPosition} 
        zoom={defaultZoom} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg shadow-inner border border-border"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {reviews.map(review => (
        <Marker key={review.id} position={[review.latitude, review.longitude]}>
          <Popup>
            <div className="p-1">
              <h3 className="font-bold text-base text-primary mb-1">{review.locationName}</h3>
              <p className="text-xs text-foreground/80 mb-0.5">{review.address}</p>
              <p className="text-xs text-muted-foreground">Rating: {review.overallRating}/5</p>
              {/* Future: Add a link to the full review or more details */}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;
