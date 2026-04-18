import Nav from './Components/Nav.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Books from './Pages/Books.jsx'
import { books } from './data'
import BookInfo from './Pages/BookInfo.jsx';
function App() {
  return (
    <Router>
   <div className="App">
      <Nav/>
      <Switch >
      <Route path="/"  exact component={Home}/> 
      <Route path="/books" exact render={()=><Books books={books} />}/>
      <Route path="/books/:id" render={()=><BookInfo books={books}/>}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
