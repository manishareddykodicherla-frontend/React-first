import React from 'react'
import {books} from '../data' // books is the array from data.js here we are searching for data in data.jsx file


import Book from '../Components/UI/Book'


export default function Featured() {
    console.log(books) // u will be getting all the books from the data.jsx
      return (
<section id="features">
    <div className="container">
        <div className='row'>
<h2 classname="section__title">Featured<span className="purple">Books</span></h2>
<div className="books">
    {
        books.filter((book)=>book.rating===5) // filtering the book by rating 
        .slice(0,4) // by this we are looking for only four books
        .map(book=>  <Book number={book}/>) // mapping each book with book component
    }
  
</div>
        </div>
    </div>
</section>
  )
}
