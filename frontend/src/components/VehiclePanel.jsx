import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={() => props.setVehiclePanelOpen(false)}
        className='p-1 absolute top-0 text-center w-[93%]'><i className=' text-3xl text-gray-400 ri-arrow-down-wide-line'></i></h5>
      <h3 className="text-2xl mb-5 font-semibold">Choose your ride</h3>

      {/* Vehicle options */}
      <div onClick={() => props.setConfirmRidePanel(true)} className="flex p-3 border-2 mb-2 active:border-gray-800 rounded-xl w-full items-center justify-between">
        <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium">
            CarConnect <span><i className="ri-user-3-fill text-base"></i>4</span>
          </h4>
          <h5 className="font-medium text-sm">2 min away</h5>
          <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹293.20</h2>
      </div>

      <div onClick={() => props.setConfirmRidePanel(true)} className='flex p-3 border-2 mb-2 active:border-gray-800 rounded-xl w-full items-center justify-between'>
        <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />

        <div className='-ml-2 w-1/2'>
          <h4 className='font-medium'>SmartPool <span><i className='ri-user-3-fill text-base'></i>1</span></h4>
          <h5 className='font-medium text-sm'>3 min away</h5>
          <p className='font-medium text-xs text-gray-600'>Affordable, motorcycle rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹65</h2>
      </div>

      <div onClick={() => props.setConfirmRidePanel(true)} className='flex p-3 border-2 mb-2 active:border-gray-800 rounded-xl w-full items-center justify-between'>
        <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />

        <div className='ml-2 w-1/2'>
          <h4 className='font-medium'>SmartPool <span><i className='ri-user-3-fill text-base'></i>1</span></h4>
          <h5 className='font-medium text-sm'>3 min away</h5>
          <p className='font-medium text-xs text-gray-600'>Affordable, auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹118.68</h2>
      </div>
    </div>
  )
}

export default VehiclePanel
