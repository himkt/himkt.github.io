import React from "react";
import Paper from "../types/paper";


type Props = {
  paper: Paper;
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


const Bib = ({ paper, }: Props) => {
  return (
    <>
      <div className="float-right bg-gray-400 border-2 border-indigo-500 rounded-md px-3">
        <button className="font-mono font-semibold text-xs">Copy</button>
      </div>
      <div>
      <pre className="px-6 pb-4 pt-6 text-xs whitespace-pre-wrap">{ constructBibText(paper) }</pre>
      </div>
    </>
  );
}


export default Bib;
