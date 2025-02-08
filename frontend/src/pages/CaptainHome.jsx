import React, { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import AvailableRidesPopUp from "../components/AvailableRidesPopUp"; // ✅ Import pop-up
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CapatainContext";
import axios from "axios";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CaptainHome = () => {
  const [rides, setRides] = useState([]); // Store ride requests
  const [showRides, setShowRides] = useState(false); // ✅ Define showRides state
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", { userId: captain._id, userType: "captain" });

    socket.on("new-ride", (data) => {
      setRides((prevRides) => [...prevRides, data]); // Add new ride
    });

    return () => {
      socket.off("new-ride");
    };
  }, [socket, captain]);

  async function fetchRides() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/rides/pending`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setRides(response.data);
      setShowRides(true); // ✅ Show rides pop-up
    } catch (error) {
      console.error("Error fetching rides:", error);
    }
  }

  async function confirmRide(rideId) {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
        { rideId, captainId: captain._id },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      const ride = rides.find((r) => r._id === rideId);
      setSelectedRide(ride); // ✅ Set selected ride for confirmation pop-up
      setShowRides(false); // ✅ Close the available rides pop-up
      setConfirmRidePopupPanel(true); // ✅ Open the Confirm Ride Pop-up
    } catch (error) {
      console.error("Error confirming ride:", error);
    }
  }


  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="#" alt="" />
        <Link to="/captain-home" className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-2/4">
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className="h-3/6 p-6 flex flex-col justify-between">
        <CaptainDetails />
        <button
          onClick={fetchRides}
          className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded mt-4"
        >
          View Available Rides 🚗
        </button>
      </div>

      {/* ✅ Show the Available Rides Pop-up */}
      {showRides && (
        <AvailableRidesPopUp
          rides={rides}
          confirmRide={confirmRide}
          closePopup={() => setShowRides(false)}
        />
      )}

      {/* 🚀 Show Confirm Ride Pop-up when confirmRidePopupPanel is true */}
      {confirmRidePopupPanel && (
        <div ref={confirmRidePopupPanelRef} className="fixed w-full h-screen z-20 bottom-0 bg-white px-3 py-10 pt-12">
          <ConfirmRidePopUp
            ride={selectedRide}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
            setRidePopupPanel={setRidePopupPanel}
          />
        </div>
      )}

    </div>
  );
};

export default CaptainHome;
