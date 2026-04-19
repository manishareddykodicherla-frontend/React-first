import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import Rating from "../Components/UI/Rating"
import Price from "../Components/Price"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Book from "../Components/UI/Book"
import Cart from './Cart'
import { useState } from 'react'
export default function BookInfo( { books,addToCart,cart }) {
    const {id}= useParams();
    const book= books.find(book=>+book.id===+id)
    const [added,SetAdded]=useState(false);
    function addBookToCart(book){
        SetAdded(true);
        addToCart(book)
    }
    function BookExistsOnCart(){
       return cart.find(book => book.id=== id)
    }
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to ="/books" className="book__link">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                        <Link to="/books" className="book__link">
                        <h2 className="book__selected--title--top">Books
                            </h2></Link>
                    </div>
                    <div className="book__selected">

<figure className="book__selected--figure">
    <img  src={book.url} alt=""classname="book__selected--img"/>
    </figure>                    
    <div className="book__selected--description">
        <h2 className="book__selected--title">
            {book.title}
        </h2>
        <Rating rating={book.rating}/>
        <div className="book__selected--price"><Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
        </div>
        <div className="book__summary">
            <div classname="book__summary--title">
                <h2>Summary</h2>
            </div>
            <p className="book__summary--para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores vitae amet quisquam ducimus enim cumque possimus, ad suscipit, et recusandae aspernatur ratione est. Odit at vel similique non asperiores?
            </p>
             <p className="book__summary--para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores vitae amet quisquam ducimus enim cumque possimus, ad suscipit, et recusandae aspernatur ratione est. Odit at vel similique non asperiores?
            </p>
        </div>
        {BookExistsOnCart()?(<button className="btn">CheckOut</button>):
     (<button className="btn" onClick={()=>addBookToCart(book)}> Add to cart</button>)
        }
    </div> 
 </div>
     </div>
            </div>
            <div className="book__container">
                <div className="row">
                    <div className='book__selected--top'>
                        <h2 className="book__selected--title--top">Recommended Books</h2>
                    </div>
                    <div className="books">
                    {books.filter(book=>book.rating===5 && +book.id!==+id)
                    .slice(0,4)
                    .map(book=><Book book={book} key={book.id}/>)}
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
