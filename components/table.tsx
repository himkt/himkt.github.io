import React from 'react';
import Paper from '../types/paper';
import Body from './body';

type Props = {
  papers: Paper[] | undefined;
};

const Table = ({ papers }: Props) => {
  return (
    <div>
      <div className="table-fixed space-y-2">
        {papers?.map((paper: Paper, idx: number) => (
          <Body paper={paper} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Table;
