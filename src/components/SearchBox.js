import React from "react";
import './searchbox.css'

const SearchBox = ({func}) => {

    return (
        <div className='search-box'>
            <input onChange={func} className='ba b--blue bg-lightest-blue search-field' type='search' placeholder='type the name'/>
        </div>
    )
}


export default SearchBox