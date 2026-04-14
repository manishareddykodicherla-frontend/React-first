import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar , faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'

export default function Book( {number}) {
  return (
    <div className="book">
        <a href="">
            <figure className="book__img--wrapper">
                <img src={number.url}/>
            </figure>
        </a>
        <div classname="book__title">
            <a href="">
                {number.title}
            </a>
        </div>
        <div classname="book__ratings"> 
            {
                new Array(5).fill(0).map((_,index)=><FontAwesomeIcon icon={faStar} key={index}></FontAwesomeIcon>)
            // to use map on array it need to have something in it ,it shouldn't be empty  
}
        </div>
        <div classname="book__price">
            {
            number.salePice?
          ( <><span className='book__price--normal'>${number.originalPrice}</span>
            ${number.salePrice}</>) :
            (<>${number.originalPrice}</>)
}
        </div>
    </div>
  )
}
