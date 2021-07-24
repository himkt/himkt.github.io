import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faAddressCard, faPaperclip } from '@fortawesome/free-solid-svg-icons'


const publication = {
  marginRight: 10 + 'px'
}


const myhero = {
  background: '' +
    'repeating-linear-gradient(transparent 0%,transparent 25%,#a7dcff 25%,#a7dcff  37.5%), ' +
    'linear-gradient(#24a5f9,#034792), '  +
    'linear-gradient(90deg,transparent 0%,transparent 50%,#b4cac1 50%,#b4cad9 80%), ' +
    'radial-gradient(circle, #0277BD 10%, #0277BD 70%)',
  backgroundBlendMode: 'screen'
}


const Hero = () => (
    <section className="myhero hero is-primary is-medium is-bold" style={myhero}>
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                <div className="column"></div>
                <div className="column is-6">
                    <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">Makoto Hiramatsu</p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Research Engineer at Cookpad. I received the bachelor's degree in library and information science and
                            the master's degree in informatics from University of Tsukuba (2017 and 2019, respectively).
                        </div>
                        <p className="title is-5" style={{color: 'hsl(0, 0%, 29%)'}}>Research Topics:</p>
                        <div className="content">Natural Language Processing, Machine Learning</div>
                        <p className="title is-5" style={{color: 'hsl(0, 0%, 29%)'}}>Social Accounts:</p>
                        <div className="content">
                        <span style={publication}><a href="https://twitter.com/himkt" target="_brank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></span>
                        <span style={publication}><a href="https://github.com/himkt" target="_brank"><FontAwesomeIcon icon={faGithub} size="lg" /></a></span>
                        <span style={publication}><a href="https://www.linkedin.com/in/himkt" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></span>
                        <span style={publication}><a href="https://scholar.google.com/citations?user=48jLQIwAAAAJ&hl=en&oi=ao" target="_blank"><FontAwesomeIcon icon={faGraduationCap} size="lg" /></a></span>
                        </div>
                        <p className="title is-5" style={{color: 'hsl(0, 0%, 29%)'}}>Links:</p>
                        <div className="content">
                        <span style={publication}><a href="/resume.pdf" target="_brank"><FontAwesomeIcon icon={faAddressCard} size="lg" /> Resume</a></span>
                        <span style={publication}><a href="/interest" target="_brank"><FontAwesomeIcon icon={faPaperclip} size="lg" /> Interest</a></span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="column"></div>
                </div>
            </div>
        </div>
    </section>
)


export default Hero
