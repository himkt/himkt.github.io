import React from 'react';
import type { NextPage } from 'next';
import Profile from '../components/profile';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto">
        <div className="flex place-content-center">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Home;
