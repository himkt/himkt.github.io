import React from 'react';
import type { NextPage } from 'next';
import Profile from '../../components/profile';
import Head from 'next/head';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <div className="flex place-content-center">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
