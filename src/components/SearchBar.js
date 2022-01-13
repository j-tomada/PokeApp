import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar ({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return /*value.title.includes(searchWord); */
         });
         setFilteredData(newFilter);
    }    
    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' placeholder={placeholder} onChange={handleFilter}/>
                <div className='searchIcon'></div>
            </div>
            {filteredData.length !== 0 && (
            <div className='dataResult'>
                {filteredData.map((value, key) => {
                    return ( 
                        <a className='dataItem'> {/*value*/} </a>
                    );
                })}
            </div>
            )}
        </div>
    )
}