import Link from "next/link";
import React from "react";
import useSWR, { Fetcher } from "swr";
import Paper from "../types/paper";


const Header = () => {
  return (
    <thead>
      <tr className="font-normal text-xl text-left">
        <th>Title</th>
      </tr>
    </thead>
  )
}


const Row = (props: { paper: Paper, key: number }) => {
  console.log(props.paper);

  return (
    <tbody className="transitio duration-300 hover:bg-indigo-100">
    <tr>
      <td>
        <div className="text-lg font-mono mx-auto">
          <Link href={props.paper.paperLink}>
            <a className="text-indigo-600 hover:text-indigo-900">{ props.paper.title }</a>
          </Link>
          <div className="text-sm text-gray-500">{ props.paper.authors }</div>
          <span className="bg-sky-400 rounded-md">
          <div className="m-1">{ props.paper.sourceShort }{ props.paper.year }</div>
        </span>
        </div>
      </td>
      <td className="text-sm flex">

      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">BibTeX</a>
      </td>
    </tr>
  </tbody>
  );
}


const Table = () => {
  const appId = "AKfycbzgdVECE7gCyvJcSnO5z2NEdBdpsOQYba6EsTlsyVZN6gqzjGYYxH2KLaE-C9bEc0LOYA";
  const endpoint = `https://script.google.com/macros/s/${appId}/exec`;

  const fetcher: Fetcher<Paper[], string> = (url: string) => fetch(url).then(res => res.json())
  const { data, error } = useSWR(endpoint, fetcher);
  const isLoading = !error && !data;

  return (
    <table className="table-fixed border-separate border-spacing">
      <Header />
      {
        data?.map((paper: Paper, idx: number) => <Row paper={paper} key={idx} />)
      }
    </table>
  );
}


export default Table;
