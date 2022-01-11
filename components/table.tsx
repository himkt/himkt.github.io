import React from "react";
import useSWR, { Fetcher } from "swr";
import Paper from "../types/paper";
import Body from "./body";


const Table = () => {
  const appId = "AKfycbzgdVECE7gCyvJcSnO5z2NEdBdpsOQYba6EsTlsyVZN6gqzjGYYxH2KLaE-C9bEc0LOYA";
  const endpoint = `https://script.google.com/macros/s/${appId}/exec`;

  const fetcher: Fetcher<Paper[], string> = (url: string) => fetch(url).then(res => res.json())
  const { data, error } = useSWR(endpoint, fetcher);
  const isLoading = !error && !data;

  return (
    <div>
    {
      isLoading &&
      <h1>Now loading...</h1>
    }
    {
      !isLoading &&
      <div className="table-fixed space-y-2">
        {
          data?.map((paper: Paper, idx: number) => <Body paper={paper} key={idx} />)
        }
      </div>
    }
    </div>
  );
}


export default Table;
