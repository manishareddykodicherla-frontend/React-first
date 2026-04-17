import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar , faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'

export default function Book( {book}) {
  return (
    <div className="book">
        <a href="">
            <figure className="book__img--wrapper">
                <img src={book.url}/>
            </figure>
        </a>
        <div className="book__title">
            <a href="">
                {book.title}
            </a>
        </div>
        <div className="book__ratings"> 
            {
                new Array(Math.floor(book.rating)).fill(0).map((_,index)=><FontAwesomeIcon icon={faStar} key={index}></FontAwesomeIcon>)
            // to use map on array it need to have something in it ,it shouldn't be empty  
}
  
  {
!Number.isInteger(book.rating) &&<FontAwesomeIcon icon={faStarHalfAlt} />
  }
   </div>
        <div className="book__price">
            {
            book.salePrice?
          ( <><span className='book__price--normal'>${book.originalPrice}</span>
            ${book.salePrice}</>) :
            (<>${book.originalPrice}</>)
}
        </div>
    </div>
  )
}
