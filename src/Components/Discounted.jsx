import React from 'react'
import { books } from '../data'
import Book from '../Components/UI/Book'

export default function Discounted({ number}) {
  return (
   <section id="recent">
    <div className="container">
        <div className='row'>
            <h2>
                Discount<span className="purple">Books</span>
            </h2>
            <div classname="books">
{books
.filter((number)=> number.salePrice>0)
.slice(0,8)
.map((number)=><Book Key ={number.id}/>)}
            </div>
        </div>
    </div>
   </section>
  )
}
