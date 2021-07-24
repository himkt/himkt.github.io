import React, { ChangeEvent } from 'react'


const Form = (props: {updateContents: (query: string) => void}, {}) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.updateContents(e.currentTarget.value)
  }

  return (
    <section style={{ padding: '1rem' }}>
        <div className="container">
            <div className="field">
                <label className="label">Query</label>
                <div className="control">
                <input
                    type="text"
                    className="input"
                    placeholder="Named Entity Recognition"
                    onChange={handleInputChange} />
                </div>
            </div>
        </div>
    </section>
  )
}


export default Form
