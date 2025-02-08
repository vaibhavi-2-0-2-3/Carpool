import React from "react";

const RidePopUp = ({ ride, setRidePopupPanel, setConfirmRidePopupPanel, confirmRide }) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => setRidePopupPanel(false)}>
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img className="h-12 rounded-full object-cover w-12" src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
          <h2 className="text-lg font-medium capitalize">{ride?.user?.fullname?.firstname} {ride?.user?.fullname?.lastname}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="mt-5 w-full">
        <button onClick={confirmRide} className="bg-green-600 w-full text-white font-semibold p-2 rounded-lg">Accept</button>
        <button onClick={() => setRidePopupPanel(false)} className="mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg">Ignore</button>
      </div>
    </div>
  );
};

export default RidePopUp;
