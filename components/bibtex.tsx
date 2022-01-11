import React, { Dispatch, SetStateAction } from "react";
import Paper from "../types/paper";


type Props = {
  paper: Paper;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}


const constructBibText = (paper: Paper) => {
  const firstAuthor = (authors: string[]) => authors[0].split(" ")[0];

  let entry = '';
  if (paper.paperType == 'Conference paper') {
    entry += `@inproceedings{${firstAuthor(paper.authors) + paper.year},\n`;
    entry += `  booktitle = {Proceedings of ${paper.source}},\n`;
  }

  else {
    entry += '@article\n';
    entry += `  journal = {${paper.source}},\n`;
  }

  entry += `  title  = {${paper.title}},\n`;
  entry += `  author = {${paper.authors.join(" and ")}},\n`;
  entry += `  year   = {${paper.year}},\n`;
  entry += '}'

  return entry
}


const Bib = ({ paper, setIsOpen }: Props) => {
  return (
    <>
      <div>
        <pre className="
          my-4
          bg-slate-100/20
          backdrop-blur-sm
          shadow-md
          rounded-md
          px-6
          pb-4
          pt-6
          text-xs
          whitespace-pre-wrap
        ">{constructBibText(paper)}</pre>
      </div>
      <div className="space-x-2">
        <button className="outline-none rounded-md bg-white hover:bg-blue-500 transition duration-700">
          <p className="text-xs font-bold mx-2 my-1">Copy</p>
        </button>
        <button className="outline-none rounded-md bg-white hover:bg-blue-500 transition duration-700" onClick={ () => setIsOpen(false) }>
          <p className="text-xs font-bold mx-2 my-1">Close</p>
        </button>
      </div>
    </>
  );
}


export default Bib;
