const axios = require("axios");

// Function to geocode an address
const getCoordinates = async (address) => {
  const apiKey = process.env.MAPS_API;
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
    console.error("Error fetching coordinates:", err.message);
    throw err;
  }
};

module.exports.getCoordinates = getCoordinates;

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

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  try {
    // Get coordinates for origin and destination
    const originCoords = await getCoordinates(origin);
    const destinationCoords = await getCoordinates(destination);

    // Calculate distance
    const distance = haversineDistance(originCoords, destinationCoords);

    // Estimate travel time (e.g., assume average speed of 60 km/h for cars)
    const avgSpeedKmH = 60; // Adjust as needed
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

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("Query is required");
  }

  const apiKey = process.env.MAPS_API; // OpenCage API key from .env
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    input
  )}&key=${apiKey}&limit=5`;

  try {
    const response = await axios.get(url);

    if (response.data.results.length > 0) {
      // Map the results to an array of suggestions
      const suggestions = response.data.results.map((result) => ({
        formatted: result.formatted, // Full address
        geometry: result.geometry, // Coordinates
      }));
      return suggestions;
    } else {
      throw new Error(`No autocomplete suggestions found for query: ${input}`);
    }
  } catch (err) {
    console.error("Error fetching autocomplete suggestions:", err.message);
    throw err;
  }
};