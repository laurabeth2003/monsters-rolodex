import React from 'react'
import './search-box.styles.css'
//functional component that doesn't use any kind of state methods
export const SearchBox = ({placeholder, handleChange }) => (
    <input
    
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)