import React, { useState } from 'react';
import SearchBar from '../components/searchBar';
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

  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <>
      {isLoading && (
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="font-mono text-3xl animate-pulse">Loading...</h1>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="sm:container mx-auto px-10 mt-10 mb-24">
            <Table papers={data} searchKeyword={searchKeyword} />
          </div>
          <SearchBar setSearchKeyword={setSearchKeyword} />
        </>
      )}
    </>
  );
};

export default Interest;
