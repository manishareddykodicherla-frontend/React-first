import Nav from './Components/Nav.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Books from './Pages/Books.jsx'
function App() {
  return (
    <Router>
   <div clasName="App">
      <Nav/>
      <Switch >
      <Route path="/" exact component={Home}/> 
      <Route path="/books" components={Books}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
