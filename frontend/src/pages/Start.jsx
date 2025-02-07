import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1603521464090-e2e7b2bf242e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen flex flex-col justify-end'>
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[25px] font-semibold text-center'>Comfort Meets Consciousness</h2>
          {/* ideas for h2
          Guilt-free rides, made for you
          Your journey starts here
          Smart travel, zero guilt
          Carpool with care, no guilt required */}
          <Link
            to='/login'
            className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
