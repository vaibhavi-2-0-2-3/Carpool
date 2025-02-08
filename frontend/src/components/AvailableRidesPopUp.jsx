import React from "react";

const AvailableRidesPopUp = ({ rides, confirmRide, closePopup }) => {
  return (
    <div className="fixed w-full h-screen z-10 bottom-0 bg-white px-3 py-10 pt-12 flex flex-col">
      {/* 🔥 Header (Title + Close Button) */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Available Rides</h2>
        <button onClick={closePopup} className="text-red-500 text-2xl">×</button>
      </div>

      {/* 🚗 Scrollable rides list */}
      <div className="mt-4 flex-1 overflow-y-auto max-h-[70vh]">
        {rides.length === 0 ? (
          <p>No rides available at the moment.</p>
        ) : (
          rides.map((ride) => (
            <div key={ride._id} className="border p-4 my-2 rounded-lg shadow">
              <p>📍 Pickup: {ride.pickup}</p>
              <p>🏁 Destination: {ride.destination}</p>
              <p>👤 User: {ride?.user?.fullname?.firstname} {ride?.user?.fullname?.lastname}</p>
              <button
                onClick={() => confirmRide(ride._id)}
                className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
              >
                Accept Ride ✅
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableRidesPopUp;
