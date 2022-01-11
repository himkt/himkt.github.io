import React from "react";
import Paper from "../types/paper";
import { useState } from "react";
import Link from "next/link";
import PaperDialog from "./dialog";


const Body = (props: { paper: Paper, key: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(true)} className="transition duration-300 hover:bg-indigo-100">
      <div className="text-lg font-mono mx-auto">
        <Link href={props.paper.paperLink}>
          <a className="text-indigo-600 hover:text-indigo-900">{props.paper.title}</a>
        </Link >
        <div className="text-sm text-gray-500">{props.paper.authors}</div>
        <span className="bg-sky-400 rounded-md">
          <div className="m-1">{props.paper.sourceShort}{props.paper.year}</div>
        </span>
      </div>
      {isOpen &&
        <PaperDialog isOpen={true} setIsOpen={setIsOpen} paper={props.paper} />
      }
    </div>
  );
}


export default Body;
