import React, { useState } from 'react';

const RidePreferences = () => {
  const [preferences, setPreferences] = useState({
    radius: 5,
    luggage: 'small',
    hidePartialRoutes: false,
    maxTwoInBack: false,
    music: false,
    animals: false,
    children: false,
    smoking: false,
  });

  return (
    <div className="p-2 bg-white rounded-lg border border-gray-300 shadow-sm">
      {/* Radius Section */}
      <div className="mb-2">
        <div className="flex justify-between mb-2">
          <h3 className="text-sm font-medium">Radius</h3>
          <span className="text-xs text-gray-600">{preferences.radius} km</span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={preferences.radius}
          onChange={(e) =>
            setPreferences((prev) => ({ ...prev, radius: e.target.value }))
          }
          className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-500"
        />
      </div>

      {/* Luggage Section */}
      <div className="mb-2">
        <h3 className="text-sm font-medium mb-1">Luggage</h3>
        <div className="flex justify-between">
          {['small', 'medium', 'large'].map((size) => (
            <div
              key={size}
              className="text-center cursor-pointer"
              onClick={() =>
                setPreferences((prev) => ({ ...prev, luggage: size }))
              }
            >
              <div
                className={`p-2 rounded-md ${preferences.luggage === size ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 text-gray-400'
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${size === 'small'
                    ? 'h-6 w-4'
                    : size === 'medium'
                      ? 'h-6 w-5'
                      : 'h-6 w-6'
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 8v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8m16 0V6a2 2 0 00-2-2h-4M4 8V6a2 2 0 012-2h4"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-600 capitalize">{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rides and Comfort Section */}
      <div className="grid grid-cols-2 gap-4 mb-2">
        {/* Rides Section */}
        <div>
          <h3 className="text-sm font-medium mb-2">Rides</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={preferences.hidePartialRoutes}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  hidePartialRoutes: e.target.checked,
                }))
              }
              className="w-4 h-4 border-2 border-gray-300 rounded-sm mr-2"
            />
            <span className="text-xs text-gray-800">Hide partial routes</span>
          </label>
        </div>

        {/* Comfort Section */}
        <div>
          <h3 className="text-sm font-medium mb-2">Comfort</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={preferences.maxTwoInBack}
              onChange={(e) =>
                setPreferences((prev) => ({
                  ...prev,
                  maxTwoInBack: e.target.checked,
                }))
              }
              className="w-4 h-4 border-2 border-gray-300 rounded-sm mr-2"
            />
            <span className="text-xs text-gray-800">Max 2 people in back seat</span>
          </label>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="mb-2">
        <h3 className="text-sm font-medium mb-2">Additional Preferences</h3>
        <div className="grid grid-cols-2 gap-2">
          {['music', 'animals', 'children', 'smoking'].map((pref) => (
            <label key={pref} className="flex items-center">
              <input
                type="checkbox"
                checked={preferences[pref]}
                onChange={(e) =>
                  setPreferences((prev) => ({
                    ...prev,
                    [pref]: e.target.checked,
                  }))
                }
                className="w-4 h-4 border-2 border-gray-300 rounded-sm mr-2"
              />
              <span className="text-xs text-gray-800 capitalize">{pref}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Update Button */}
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-full text-xs font-medium hover:bg-blue-600 transition-colors"
        onClick={() => console.log('Preferences updated:', preferences)}
      >
        Update Preferences
      </button>
    </div>
  );
};


export default RidePreferences;
