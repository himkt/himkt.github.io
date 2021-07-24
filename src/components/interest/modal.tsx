import React, { useEffect, useState } from 'react'

import { BibliographyInterface } from '../../interfaces/components/bibliography'


const ModalButton = (props: {bibliography: BibliographyInterface}) => {

  const [isActive, setIsActive] = useState("");

  const createBibTexEntry = () => {
    var entry = ''

    if (props.bibliography.paperType == 'Conference paper') {
      entry += `@inproceedings{${props.bibliography.firstAuthor + props.bibliography.year},\n`
      entry += `  booktitle = {Proceedings of ${props.bibliography.source}},\n`
    }
    else {
      entry += '@article\n'
      entry += `  journal = {${props.bibliography.source}},\n`
    }

    entry += `  title  = {${props.bibliography.title}},\n`
    entry += `  author = {${props.bibliography.authors.trim().replace(/,/g, ' and ')}},\n`
    entry += `  year   = {${props.bibliography.year}},\n`
    entry += '}'

    return entry
  }

  useEffect(() => {
    setIsActive("");
  }, []);

  return (
    <div>
      <div className={["modal", isActive].join(" ")}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">BibTex entry</p>
          </header>
          <section className="modal-card-body">
            <pre style={{ whiteSpace: "pre", userSelect: "all" }}>{ createBibTexEntry() }</pre>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-info" onClick={ () => setIsActive("") }>Close</button>
          </footer>
        </div>
      </div>
      <a><span className="tag is-normal is-info is-light" onClick={ () => setIsActive("is-active") }>BibTex</span></a>
    </div>
  )
}


export default ModalButton
