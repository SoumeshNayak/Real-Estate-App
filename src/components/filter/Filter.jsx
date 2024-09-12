import './filter.scss';
import React from 'react'

export default function Filter() {
  return (
    <div className='filter'>
      <h1>Search Result for <b>London</b></h1>
      <div className="top">
        <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id='city' name='city' placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
      <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
                <option value="any">any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
            </select>
        </div>

        <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
                <option value="any">any</option>
                <option value="apartment">Apartment</option>
                <option value="home">Home</option>
                <option value="condo">Condo</option>
                <option value="Land">land</option>

            </select>
        </div>

        <div className="item">
            <label htmlFor="minPrice">Location</label>
            <input type="number" name='minPrice' id='minPrice' placeholder='any' />
        </div>

        <div className="item">
        <label htmlFor="maxPrice">Location</label>
        <input type="number" name='maxPrice' id='maxPrice' placeholder='any' />
        </div>

        <div className="item">
            <label htmlFor="badroom">Badroom</label>
            <input type="number" id='badroom' name='badroom' placeholder='any'/>
        </div>

        <button>
            <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}
