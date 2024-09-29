import React, { useState } from 'react'
import ItemList from './ItemList';
const RestaurantCategory = ( {data, showItems, newSetShowIndex}) => {
  // const [showItems,setShowItems] = useState(false);
  // const handleClick = () => {
  //   setShowItems(!showItems);
  // }
  const handleClick = () => {
    newSetShowIndex();
    }
  return (
    <div>
      <div className='w-6/12 mx-auto text-lg my-4 bg-gray-100 shadow-lg p-4 '>
      <div className='flex justify-between font-bold cursor-pointer' onClick={handleClick}>

        <span> { data.title } ({data.itemCards.length})</span>
        <span>{showItems ? 'v' : '^'}</span> {/* Change arrow direction based on showItems */}
               
      </div>
      {showItems && <ItemList items = {data.itemCards}/>}
      {/* if showItems is true then it will execute <ItemList items = {data.itemCards}/> ,or else if showItems is false it will not execute <ItemList items = {data.itemCards}/>*/}
      
      </div>
    </div>
  );
};

export default RestaurantCategory;