import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen relative overflow-hidden'>
      <div className='h-screen flex justify-between flex-col w-full'>
        <img 
          className='bg-cover bg-center' 
          src="https://images.unsplash.com/photo-1603521464090-e2e7b2bf242e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
        <div className='bg-white py-4 px-4 mt-[-30px]'> {/* Added negative margin-top */}
          <h2 className='text-2xl font-bold '>Get Started with StreetSmart</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
