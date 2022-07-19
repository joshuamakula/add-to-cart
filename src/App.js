import React, { useState } from 'react';
import Navbar from './components/navbar'
import Amazon from './components/amazon'
const App = () => {

  const [show, setShow] = useState(true)

  
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
      cart.push(item)
      // setCart(...[cart,item]);
      console.log(cart);
  }

  return (
    <div>
      <Navbar setShow={setShow} />
      {show ? <Amazon handleClick={handleClick} /> : "Cart"} 
    </div>
  );
};

export default App; 