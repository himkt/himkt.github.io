import React from "react";
import Paper from "../types/paper";
import { useState } from "react";
import Link from "next/link";
import PaperDialog from "./dialog";


const Body = (props: { paper: Paper, key: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(true)} className="transition duration-300 hover:bg-indigo-200 rounded-md">
      <div className="text-lg font-mono mx-4 py-2">
        <Link href={props.paper.paperLink}>
          <a className="text-indigo-600 hover:text-indigo-900">
            {props.paper.title}
          </a>
        </Link >
        <div className="text-sm text-gray-500">{props.paper.authors.join(" ")}</div>
        <span className="flex">
        <div className="my-1 bg-red-300 rounded-md">
          <div className="text-sm font-mono mx-1">{props.paper.sourceShort}{props.paper.year}</div>
        </div>
      </span>
      </div>
      {isOpen &&
        <PaperDialog isOpen={true} setIsOpen={setIsOpen} paper={props.paper} />
      }
    </div>
  );
}


export default Body;
