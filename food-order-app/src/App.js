import Header from './components/Layout/header';
import './App.css';
import { Fragment } from 'react'
import Meals from './components/Meals/meals';
import Cart from './components/Cart/Cart'

function App() {
  return (
  <Fragment>
    <Cart />
    <Header />
    <main>
<Meals />
    </main>
  </Fragment>
  );
}

export default App;
