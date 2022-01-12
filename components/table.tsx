import React from 'react';
import Paper from '../types/paper';
import Body from './body';

type Props = {
  papers: Paper[] | undefined;
  searchKeyword: string;
};

const search = (paper: Paper, searchKeyword: string) => {
  if (searchKeyword === '') return true;

  const searchFields = [
    paper.title,
    paper.authors.join(' '),
    paper.source,
    paper.sourceShort,
  ];

  for (const field of searchFields) {
    const q = searchKeyword.toLocaleLowerCase();
    const f = field.toLocaleLowerCase();

    if (f.match(q)) return true;
  }

  return false;
};

const Table = ({ papers, searchKeyword }: Props) => {
  const match_papers = papers?.filter((paper) => search(paper, searchKeyword));

  return (
    <div>
      <div className="table-fixed space-y-2">
        {match_papers?.map((paper: Paper, idx: number) => (
          <Body paper={paper} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Table;
