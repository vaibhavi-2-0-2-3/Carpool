const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.MAPS_API;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  // console.log(`Request URL: ${url}`); // Log the request URL for debugging

  try {
    const response = await axios.get(url);

    // console.log("API Response:", response.data); // Log the full API response for debugging

    if (response.data && response.data.results.length > 0) {
      const location = response.data.results[0].geometry;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("No coordinates found for the given address");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error.message);
    throw new Error(
      "Unable to fetch coordinates. Check the logs for more details."
    );
  }
};

// Function to calculate the Haversine distance
const haversineDistance = (coord1, coord2) => {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(coord2.lat - coord1.lat);
  const dLng = toRadians(coord2.lng - coord1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(coord1.lat)) *
      Math.cos(toRadians(coord2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

// Function to geocode an address using OpenCage
const geocodeAddress = async (address, apiKey) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.results.length > 0) {
      const location = response.data.results[0].geometry;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error(`Unable to fetch coordinates for address: ${address}`);
    }
  } catch (err) {
    console.error("Error in geocoding:", err.message);
    throw err;
  }
};

// Main function to get distance and estimated time
module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const apiKey = process.env.MAPS_API; // Replace with your OpenCage API key in .env

  try {
    // Get coordinates for origin and destination
    const originCoords = await geocodeAddress(origin, apiKey);
    const destinationCoords = await geocodeAddress(destination, apiKey);

    // Calculate distance
    const distance = haversineDistance(originCoords, destinationCoords);

    // Estimate travel time (e.g., assume average speed of 60 km/h for cars)
    const avgSpeedKmH = 60; // You can adjust this based on transport mode
    const estimatedTimeH = distance / avgSpeedKmH;
    const estimatedTimeMins = Math.round(estimatedTimeH * 60);

    return {
      distance: distance.toFixed(2) + " km",
      estimatedTime: estimatedTimeMins + " mins",
    };
  } catch (err) {
    console.error("Error calculating distance and time:", err.message);
    throw err;
  }
};
