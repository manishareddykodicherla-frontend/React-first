import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar , faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
export default function Rating({ rating }) {
  return (
    <div>
        <div className="book__ratings"> 
            {
                new Array(Math.floor(rating)).fill(0).map((_,index)=><FontAwesomeIcon icon={faStar} key={index}></FontAwesomeIcon>)
            // to use map on array it need to have something in it ,it shouldn't be empty  
}
  
  {
!Number.isInteger(rating) &&<FontAwesomeIcon icon={faStarHalfAlt} />
  }
   </div>
    </div>
  )
}
