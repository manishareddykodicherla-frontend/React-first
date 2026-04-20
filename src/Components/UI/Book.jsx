import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect,useRef } from 'react'
import {Link } from "react-router-dom"
import Rating from "./Rating"
export default function Book( {book}) {
    const[img,setImg]= useState();
    const mountedRef=useRef(true);
useEffect(()=>{
const image=new Image()
 image.src=book.url;
 image.onload=()=>{
    setTimeout(()=>{
         setImg(image)
    },500) 
 };
 return()=>{
    //when the component unmounts
    mountedRef.current=false;
 }
})
  
  return (
    <div className="book">
{img 
    ? (
   <> <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
                <img src={book.url}/>
            </figure>
        </Link>
        <div className="book__title">
            <Link to={`/books/${book.id}`}>
                {book.title}
            </Link>
        </div>
        <Rating rating={book.rating}/>
        </>
        )

    :(
    <><div className="book__img--skeleton"></div>
        <div className="skeleton book__title--skeleton"></div>
            <div className='skeleton book__rating--skeleton'></div>
            <div className='skeleton book__price--skeleton'></div>
            </>
    )
    
    
        
    }
    
    </div>
  )
}
