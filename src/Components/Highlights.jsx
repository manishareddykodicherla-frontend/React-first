import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faBolt, faBookOpen,  faTags} from '@fortawesome/free-solid-svg-icons'
import Highlight from '../Components/UI/Highlight'
export default function Highlights() {
  return (
   <section id="highlights">
    <div className='container'>
        <div className='row'>
            <h2 className="section__title">Why choose<span className='purple'>Libarary</span></h2>
            <div className="highlight__wrapper">
                <Highlight icon={<FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>}
                title="Easy and Quick"
                para='Get access to the book you purchased online instantly'
                />
                <Highlight icon={<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>}
                title='10,000+ Books'
                para='Library has books in all your favourite categeories'
                />
                <Highlight icon={<FontAwesomeIcon icon={ faTags}></FontAwesomeIcon>}
                title='Affordable'
                para='Get your hands on popular Books as little as $10'
                />
            </div>
        </div>
    </div>

   </section>
  )
}
