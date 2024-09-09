import React, { useState } from 'react'
import './searchbar.scss'

const types = ["buy","rent"]
export default function Searchbar() {

  const [query,setQuery]=useState({
    type:"buy",
    location: "",
    minPrice: 0,
    maxPrice: 0
  })

  const switchType=(val)=>{
      setQuery(prev=>(
        {...prev,type:val}
      ))
  }
  return (
    <div className='searchBar'>
      <div className="type">
        {
          types.map((type)=>(
            <button onClick={()=>switchType(type)} key={type} className={query.type===type?"active":""}>
              {type}
              </button>
          ))
        }

      </div>
      <form>
        <input type="text" name="location" placeholder='City Location'/>
        <input type="number" name='minPrice' placeholder="Min Price" min={0} max={100000000}/>
        <input type="number" name='maxPrice' 
        placeholder="Max Price" min={0} max={100000000}/>

        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}
