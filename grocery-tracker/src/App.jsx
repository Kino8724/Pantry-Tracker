import { useState } from 'react'
import './App.css'

function Header() {
  return( 
    <h1>Grocery Tracker WebApp</h1>
  )
}

function Item() {
  return(
    <div className="item">
      <p className="item-text">Name</p>
      <p className="item-text"># of item</p>
    </div>
  )
}

function ItemList() {
  return(
    <Item />

 )
}

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ItemList />
      </div>
    </>
  )
}

export default App
