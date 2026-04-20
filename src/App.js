import Nav from './Components/Nav.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Books from './Pages/Books.jsx'
import { books } from './data'
import BookInfo from './Pages/BookInfo.jsx';
import Cart from "./Pages/Cart.jsx" 
import { useState, useEffect } from 'react';
function App() {
  const [cart,setCart]=useState([]);
  function addToCart( book ){
setCart([...cart,{...book, quantity:1}]) 
  }
  function changeQuantity(book, quantity){
setCart((cart.map(item=>{
  if(item.id===book.id){
    return{
      ...item,
      quantity:+quantity,// value from event.taget.value from changeQuantity
    }
  }
  else{
    return item
  }
})))
  }                            
  function removeItem(item){
setCart(cart.filter(book=>+book.id !== +item.id))
  }
  useEffect(()=>{console.log(cart)},[cart])
  // if u want to change anything cart (or any array) and u want to see the change 
  //then use useEffect to see changes here to see changes in cart 
  
  function numberOfItems(){
    let counter=0;
    cart.forEach(item=>{
      counter+=item.quantity
    })
    return counter;
  }
  return (
    <Router>
   <div className="App">
      <Nav numberOfItems={numberOfItems()}/>
      <Switch >
      <Route path="/"  exact component={Home}/> 
      <Route path="/books" exact render={()=><Books books={books} />}/>
      <Route path="/books/:id" render={()=><BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>

      <Route path="/cart" render={()=><Cart books={books} cart={cart} changeQuantity={changeQuantity}
      removeItem={removeItem}/>}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
