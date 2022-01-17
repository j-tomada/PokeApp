import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import './SearchBar.css'

export default function SearchBar ({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.includes(searchWord);
         });
         setFilteredData(newFilter);
    }    
    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' placeholder={placeholder} onChange={handleFilter} className='inputBtn'/>
                <div className='searchIcon'>
                    <SearchTwoToneIcon/>
                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className='dataResult'>
                {filteredData.slice(0, 15).map((value, key) => {
                    return ( 
                        <a className='dataItem' href={value.url} target="_blank">
                            <p>{value.name}</p>
                        </a>
                    );
                })}
            </div>
            )}
        </div>
    )
}