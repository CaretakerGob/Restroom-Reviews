
'use client';

import type { Review } from '@/lib/mockReviews';
import { useState, useMemo } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

interface InteractiveMapProps {
  reviews: Review[];
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

// Default center: somewhere in the US
const defaultCenter = {
  lat: 39.8283,
  lng: -98.5795,
};

const InteractiveMap: React.FC<InteractiveMapProps> = ({ reviews }) => {
  const [selectedMarker, setSelectedMarker] = useState<Review | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    // libraries: ['places'], // Add other libraries as needed
  });

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-destructive/10 text-destructive p-4 rounded-lg">
        <p>Error loading Google Maps. Please ensure the API key is correctly configured and the Maps JavaScript API is enabled.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return <Skeleton className="w-full h-full rounded-lg" />;
  }
  
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={defaultCenter}
      zoom={4}
      options={mapOptions}
    >
      {reviews.map(review => (
        <MarkerF
          key={review.id}
          position={{ lat: review.latitude, lng: review.longitude }}
          onClick={() => setSelectedMarker(review)}
          title={review.locationName}
        />
      ))}

      {selectedMarker && (
        <InfoWindowF
          position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }}
          onCloseClick={() => setSelectedMarker(null)}
          options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
        >
          <div className="p-1 max-w-xs">
            <h3 className="font-bold text-base text-primary mb-1">{selectedMarker.locationName}</h3>
            <p className="text-xs text-foreground/80 mb-0.5">{selectedMarker.address}</p>
            <p className="text-xs text-muted-foreground">Rating: {selectedMarker.overallRating}/5</p>
            {/* Future: Link to full review */}
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default InteractiveMap;
