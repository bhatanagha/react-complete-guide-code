import Header from './components/Layout/header';
import './App.css';
import { useState } from 'react'
import { Fragment } from 'react'
import Meals from './components/Meals/meals';
import Cart from './components/Cart/Cart'

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true) 
  }
  const hideCartHandler = () => {
    setCartIsShown(false) 
  }

  return (
  <Fragment>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
    <main>
<Meals />
    </main>
  </Fragment>
  );
}

export default App;
