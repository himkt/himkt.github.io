import React from 'react'

import { MetadataInterface } from '../../interfaces/components/metadata'


const Metadata = (props: {metadata: MetadataInterface}) => {
  return (
    <div className='tags are-normal'>
      <a className='tag' href={props.metadata.paperLink}>Paper</a>
      { props.metadata.issueLink && <a className='tag' href={ props.metadata.issueLink }>Issue</a> }
      <span className='tag is-normal is-primary is-light'>{props.metadata.sourceShort}</span>
      <span className='tag is-danger is-light'>{props.metadata.year}</span>
      { props.metadata.keywords.split(',').map((e: string, idx: number) =>
      <span key={ idx } className='tag is-warm'>{ e }</span>
      ) }
    </div>
  )
}


export default Metadata
