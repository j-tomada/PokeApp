import React, { useState } from 'react'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import './SearchBar.css'

export default function SearchBar ({ placeholder, data, setReturnData}) {
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            return value.name.includes(searchWord);
         });

         if (searchWord ==="") {
             setFilteredData([])
         }
         else {
             setFilteredData(newFilter)
         }
    }    

    const onSuggestHandler = (text, url) => {
        setWordEntered(text)
        setFilteredData([])

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setReturnData(data)
        })
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("")
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
                    {filteredData.length === 0 ? <SearchTwoToneIcon /> : <CloseTwoToneIcon  id='clearBtn' onClick={clearInput}/>}
                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className='dataResult'>
                {filteredData.map((value, key) => {
                    return ( 
                        <a className='dataItem' target="_blank" key={key}  onClick={() =>  {
                            onSuggestHandler(value.name, value.url);
                            console.log(value.name);
                        }}>
                            <p>{value.name}</p>
                        </a>
                    );
                })}
            </div>
            )}
        </div>
    )
}