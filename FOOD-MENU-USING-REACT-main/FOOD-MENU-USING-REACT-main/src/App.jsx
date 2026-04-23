import React, { useState } from 'react'
import Menu from './Menu'
import data from './Data'
import Upper from './Upper';
import Lower from './lower'
function App() {
  let [foodItems, setFoodItems] = useState(data);
  return (
    <>
    <div className='upperheading text-center p-5'> <Upper/> </div>
    <div className="menuSec" >
      <Menu items={foodItems}/>
    </div>
    <div className="lowerheadings  text-center p-5"> <Lower /> </div>
    </>
    
  )
}

export default App