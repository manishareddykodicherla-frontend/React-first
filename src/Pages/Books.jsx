import React, { useState } from 'react'

import Book from "../Components/UI/Book"
export default function Books( { books :initialBooks}) {
    const[books,SetBooks]= useState(initialBooks);
    function filterBooks(filter){
       if(filter==='LOW__TO__HIGH'){
SetBooks(books.slice().sort((a,b)=>(a.salePrice||a.originalPrice)-(b.salePrice||b.originalPrice)))
       }
       if(filter==='HIGH__TO__LOW'){
SetBooks(books.slice().sort((a,b)=>(b.salePrice||b.originalPrice)-(a.salePrice||a.originalPrice)))
       }
       if (filter==='Rating'){
        SetBooks(books.slice().sort((a,b)=>(a.rating-b.rating)))
       }
    }
  return (
    <div>
    <div id ='books__body'>
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All Books</h2>
                            <select id="filter" onChange={(event)=>filterBooks(event.target.value)}>
                                <option value=""  disabled> Sort</option>
                                <option value="LOW__TO__HIGH">Price, Low to High</option>
                                <option value="HIGH__TO__LOW"> Price , High to Low</option>
                                <option value="Rating"> Rating</option>
                            </select>                 
                        </div>
                        <div className="books">
                                {
                                    books.map((book)=>(<Book book={book} key={book.id}/>))
                                }

                            </div>
                    </div>

                </div>
            </section>

        </main>
    </div>
    </div>
  )
}
