import React from 'react';

const LocationSearchPanel = (props) => {

  // console.log(props)

  // Sample array of locations
  const locations = [
    '24B, Near Kafka Chowk, New Delhi, Delhi 110001',
    '10, Rajiv Gandhi Park, New Delhi, Delhi 110001',
    '35, Near Chandni Chowk, New Delhi, Delhi 110001',
    '44, Near Kapk, New Shreyenian, New Delhi, Delhi 110001',
  ];

  return (
    <div className="p-4">
      {locations.map((elem, index) => (
        <div
          onClick={() => {
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }}
          key={index}
          className="flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
