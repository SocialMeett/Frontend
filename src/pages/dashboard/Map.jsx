import React from 'react';
import {
    APIProvider,
    Map as GoogleMap} from '@vis.gl/react-google-maps';

const API_KEY = "";

const Map = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Map (Default)</h2>
            <div className="h-screen bg-gray-300 rounded-lg flex items-center justify-center">
                {/* Placeholder for Map */}
                {/* <p>Map Display</p> */}
                <APIProvider
                    apiKey={API_KEY}
                    solutionChannel="GMP_devsite_samples_v3_rgmautocomplete"
                >
                    <GoogleMap
                        mapId={"bf51a910020fa25a"}
                        defaultZoom={3}
                        defaultCenter={{ lat: 22.54992, lng: 0 }}
                        gestureHandling={"greedy"}
                        disableDefaultUI={true}
                    >
                        {/* <AdvancedMarker ref={markerRef} position={null} /> */}
                    </GoogleMap>
                    {/* <MapControl position={ControlPosition.TOP}>
                        <div className="autocomplete-control">
                            <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
                        </div>
                    </MapControl> */}
                    {/* <MapHandler place={selectedPlace} marker={marker} /> */}
                </APIProvider>
            </div>
        </div>
    );
};

export default Map;
