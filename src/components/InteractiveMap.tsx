
'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Ensure L is imported for type L.LatLngExpression if needed directly
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { Review } from '@/lib/mockReviews';
import { useState, useEffect } from 'react';

interface InteractiveMapProps {
  reviews: Review[];
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ reviews }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Perform global Leaflet icon modifications safely and only on the client, once.
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    // Defer setting isClient to true to the next event loop tick.
    // This can help with HMR and ensuring the DOM is fully settled.
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 0); 

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts before it fires
  }, []); // Empty dependency array ensures this runs once on mount

  // Default center: somewhere in the US
  const defaultPosition: L.LatLngExpression = [39.8283, -98.5795];
  const defaultZoom = 4;

  if (!isClient) {
    // Return null or a very basic placeholder. 
    // The parent's dynamic import already handles a styled loading state.
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
