import React, { useState } from 'react';
import Navbar from './components/navbar'
import Amazon from './components/amazon'
const App = () => {

  const [show, setShow] = useState(true)

  return (
    <div>
      <Navbar setShow={setShow} />
      {show ? <Amazon /> : "Cart"} 
    </div>
  );
};

export default App; 