import './App.css';
import Cart from './components/Cart';
import ItemList from './components/ItemList';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CreateItem from './components/CreateItem';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path='/productList'component={ItemList} />
      <Route exact path='/cart'component={Cart} />
      <Route path='/createProduct' component={CreateItem} />
      <Route path='/productPage' component={ProductPage} />
    </div>
    </Router>
  );
}

export default App;
