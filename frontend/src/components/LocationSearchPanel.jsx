import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {
  const handleSuggestionClick = (suggestion) => {
    const selectedText = suggestion.formatted || suggestion.address || suggestion.name || "";
    if (activeField === 'pickup') {
      setPickup(selectedText);
    } else if (activeField === 'destination') {
      setDestination(selectedText);
    }
    // setPanelOpen(false);
    // setVehiclePanel(true); // Close the panel after selection
  };

  return (
    <div>
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem.formatted || elem.address || elem.name || "No formatted address"}</h4>
        </div>
      ))}
    </div>
  );
};





export default LocationSearchPanel