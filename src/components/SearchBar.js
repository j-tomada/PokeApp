import React, { useState } from 'react'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import './SearchBar.css'

export default function SearchBar ({ placeholder, data, setInfo, setImg, setClicked}) {
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

    function determineCorrectImage(img) {
        if(img.sprites.front_default === null) {
            return img["sprites"]["other"]["official-artwork"]["front_default"]
        }
        else {
            return img.sprites.front_default
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
                            setInfo(value)
                            setImg(determineCorrectImage(value))
                            setClicked(false)
                        }}>
                            <p>
                                <img src={determineCorrectImage(value)} height="100px" width="100px" />
                                {value.name}
                            </p>
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

//Hello