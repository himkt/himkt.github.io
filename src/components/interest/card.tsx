import React from 'react'
import ModalButton from './modal'
import Metadata from './metadata'

import { PaperInterface } from '../../interfaces/components/paper'
import { BibliographyInterface } from '../../interfaces/components/bibliography'


const Card = (props: {paper: PaperInterface, idx: number}) => {
    const authors = () => props.paper.authors.trim().replace(/,/g, ' and ')
    const firstAuthor = () => props.paper.authors.trim().split(',')[0].split(' ').slice(-1)[0]

    const bibliography: BibliographyInterface = {
        title: props.paper.title,
        authors: authors(),
        firstAuthor: firstAuthor(),
        year: props.paper.year,
        source: props.paper.source,
        paperType: props.paper.paperType,
    }

    return (
        <div className="container" style={{ marginBottom: "10px" }}>
            <div className='message is-link' key={props.idx}>
            <div className='message-header'>
                <p>{ props.paper.title }</p>
                <ModalButton bibliography={ bibliography }/>
            </div>
            <div className='message-body'>
                <p>{props.paper.note}</p>
                <Metadata metadata={ props.paper } />
            </div>
            </div>
        </div>
    )
}


export default Card
