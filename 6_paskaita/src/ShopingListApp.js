import { useState } from 'react'
import React from 'react'

const ShopingListApp = () => {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems(prevItems => [...prevItems, {itemName, quantity}])
    }
    return (
      <div className="shop-app">
        <h2>Shopping List</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Produkto pavadinimas: </label>
            <input type="text" value={itemName} onChange={event=> setItemName(event.target.value)}/>
          </div>
          <div>
            <label>Kiekis: </label>
            <input type="number" value={quantity} onChange={event=> setQuantity(event.target.value)}  />
          </div>
          <button >Prideti preke i sarasa</button>
        </form>
        <ol>
          {items.map(item => <li key={item.name}>{item.itemName} x {item.quantity}</li>)}
        </ol>
      </div>
    );}

export default ShopingListApp;