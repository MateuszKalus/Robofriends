import React from "react";
import './searchbox.css'

const SearchBox = ({func}) => {

    return (
        <div>
            <input onChange={func} className='search-field' type='search' placeholder='type the name'/>
        </div>
    )
}


export default SearchBox