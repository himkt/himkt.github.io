import Link from "next/link";
import React from "react";
import useSWR, { Fetcher } from "swr";


const Header = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Title
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Title
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Status
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Conference / Journal
        </th>
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  )
}


const Row = (props: { paper: Paper, key: number }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-sky-700">
              <Link href={props.paper.paperLink}>{ props.paper.title }</Link>
            </div>
            <div className="text-sm text-gray-500">
              jane.cooper@example.com
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          { props.paper.isRead }
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        { props.paper.sourceShort }
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">BibTeX</a>
      </td>
    </tr>
  </tbody>
  );
}


type Paper = {
  authors: string;
  isRead: string;
  issueLink: string;
  keywords: string;
  note: string;
  paperLink: string;
  paperType: string;
  source: string;
  sourceShort: string;
  timeStamp: string;
  title: string;
  year: string;
}


const Table = () => {
  const appId = "AKfycbzgdVECE7gCyvJcSnO5z2NEdBdpsOQYba6EsTlsyVZN6gqzjGYYxH2KLaE-C9bEc0LOYA";
  const endpoint = `https://script.google.com/macros/s/${appId}/exec`;

  const fetcher: Fetcher<Paper[], string> = (url: string) => fetch(url).then(res => res.json())
  const { data, error } = useSWR(endpoint, fetcher);
  const isLoading = !error && !data;

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            { isLoading &&
              <p>Loading...</p>
            }
            { !isLoading &&
              <table className="min-w-full divide-y divide-gray-200">
                <Header />
                {
                  data?.map((paper: Paper, idx: number) =>
                    <Row paper={paper} key={idx} />
                  )
                }
              </table>
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default Table;
