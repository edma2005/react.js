
import React from 'react'
import TodoApp from './TodoApp'
import ShopingListApp from './ShopingListApp'
import FormAppTask from './FormAppTask'
import "./App.css"

function App() {
  return (
    <div>
      <div>
        <FormAppTask/>
      </div>
      <div>
        <TodoApp/>
        <ShopingListApp/>
      </div>
    </div>
  )
}

export default App