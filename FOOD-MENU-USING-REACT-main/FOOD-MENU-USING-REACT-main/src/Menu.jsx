import React from 'react'

function Menu({items}) {
 

  return (
    
    <div className='card-container display: flex flex-wrap place-content-around gap-6 p-10'>

        {
        items.map((food) => { 
          return(<div className='cards w-80 display: flex'>
          <div className="img-container "><img className='w-64 h-36' src={food.srceImg} alt="" srcset="" /></div>
        <div className="p-2 detail-card-container">
            <h1 className='font-bold'>{food.foodName}</h1>
            <p>{food.description}</p>
            <h3>{food.remaining == '0' ? "Ssold out" : food.remaining}</h3>
        </div>
          </div>
            
          )
        })
        }
    </div>
    
     
   )
}

export default Menu