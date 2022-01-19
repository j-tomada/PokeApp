import React, { useState } from 'react'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import './SearchBar.css'

export default function SearchBar ({ placeholder, data}) {
    const [filteredData, setFilteredData] = useState(data)
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        if (searchWord ==="") {
            setFilteredData(data)
        }
         else {
            const newFilter = data.filter((value) => {
                return value.name.includes(searchWord);
             });
             setFilteredData(newFilter)
         }
    }    

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input 
                    type='text' 
                    placeholder={placeholder}
                    value={wordEntered} 
                    onChange={handleFilter} 
                    className='inputBtn'
                 />
                <div className='searchIcon'>
                    <SearchTwoToneIcon />
                </div>
            </div>
            <div className='dataResult'>
                {filteredData.map((value, key) => {
                    return ( 
                        <a className='dataItem' target="_blank" key={key}  onClick={() =>  {
                            console.log(value.name);
                        }}>
                            <p>
                                <img src={value.sprites.front_default} />
                                {value.name}
                            </p>
                        </a>
                    );
                })}
            </div>
        </div>
    )
}