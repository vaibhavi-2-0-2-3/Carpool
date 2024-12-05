const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 30,
    car: 50,
    motorcycle: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    motorcycle: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    motorcycle: 1.5,
  };

  // Parse distance (remove 'km') and estimatedTime (remove 'mins') into numbers
  const distanceInKm = parseFloat(distanceTime.distance.replace(" km", ""));
  const durationInMins = parseInt(
    distanceTime.estimatedTime.replace(" mins", ""),
    10
  );

  const fare = {
    auto: Math.round(
      baseFare.auto +
        distanceInKm * perKmRate.auto +
        durationInMins * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        distanceInKm * perKmRate.car +
        durationInMins * perMinuteRate.car
    ),
    motorcycle: Math.round(
      baseFare.motorcycle +
        distanceInKm * perKmRate.motorcycle +
        durationInMins * perMinuteRate.motorcycle
    ),
  };

  return fare;
}

function getOtp(num) {
  function generateOtp(num) {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  }
  return generateOtp(num);
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);

  // console.log(fare);

  const ride = await rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6), // Generate a 6-digit OTP
    fare: fare[vehicleType],
  });

  return ride;
};
