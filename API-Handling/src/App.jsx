import {  useState } from 'react'
import './App.css'

import CustomHook from './customHook/CustomHook'
function App() {
  const [search, setSearch] = useState('')

 const [product, error,loading]  = CustomHook('/api/products')
  
  if(error){
    return  <h1>something went wrong</h1>
  }
  if(loading){
    return  <h1>Loading............</h1>

  }

  return (
    <>

    <input type='text' placeholder='enter your category' value={search} onChange={(e)=>setSearch(e.target.value)}/>
     <h1>usman</h1>
     <h1>products : {product.length} </h1>
    </>
  )
}

export default App
