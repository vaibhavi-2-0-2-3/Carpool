import React, { useState } from 'react';
import RidePreferences from './RidePreferences';

const VehiclePanel = (props) => {
  const [preferences, setPreferences] = useState({
    luggage: 'small', // default luggage option
    music: false,
    smoking: false,
    pets: false,
    children: false,
  });

  const handlePreferenceChange = (key, value) => {
    setPreferences((prev) => ({
      // spread the current state into a new object
      // this creates a shallow copy of the state
      // and allows us to modify the new object
      // without modifying the original state
      ...prev,
      // update the value of the key with the new value
      [key]: value,
    }));
  };

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-lg font-semibold mb-2">Set Your Preferences</h3>

      {/* Preferences Section */}
      <div>
        <RidePreferences
          preferences={preferences}
          setPreferences={handlePreferenceChange}
        />
      </div>

      <h3 className="text-lg font-semibold mb-2 mt-2">Choose Your Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('car');
        }}
        className="flex mb-2 border rounded-md p-2 items-center justify-between text-xs"
      >
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">CarConnect <span><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        {/* <h2 className="text-lg font-semibold">₹{props.fare.car}</h2> */}
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('moto');
        }}
        className="flex border rounded-md p-1 items-center justify-between text-xs"

      >
        <img
          className="h-16 "
          src="https://i.pinimg.com/736x/b8/de/df/b8dedfb4ba266128a3645663e1aa6676.jpg"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">PoolMoto <span><i className="ri-user-3-fill"></i>1</span></h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable motorcycle rides</p>
        </div>
        {/* <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2> */}
      </div>

      {/* <div
      onClick={() => {
        props.setConfirmRidePanel(true);
        props.selectVehicle('auto');
      }}
      className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      > */}
      {/* <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        /> */}
      {/* <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">PoolAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable Auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2> */}
      {/* </div> */}

    </div>


  );
};

export default VehiclePanel;
