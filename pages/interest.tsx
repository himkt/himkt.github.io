import React from 'react';
import Header from '../components/header';
import Table from '../components/table';
import useSWR, { Fetcher } from 'swr';
import Paper from '../types/paper';

const Interest = () => {
  const appId =
    'AKfycbx1BW2FiLIOs-NPVDm-w2bBE2e_ci2KiqX0ezMqHKJbV1EtGOVldYzCQm6F6rZER6dj';
  const endpoint = `https://script.google.com/macros/s/${appId}/exec`;

  const fetcher: Fetcher<Paper[], string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR(endpoint, fetcher);
  const isLoading = !error && !data;

  return (
    <>
      {isLoading && (
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="font-mono text-3xl animate-pulse">Loading...</h1>
        </div>
      )}
      {!isLoading && (
        <>
          <Header />
          <div className="sm:container mx-auto px-10 pt-24">
            <Table papers={data} />
          </div>
        </>
      )}
    </>
  );
};

export default Interest;
