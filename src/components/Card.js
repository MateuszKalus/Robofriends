import React from "react";
import './card.css';

const Card = ({ id, name, email }) => {

    return (
        <div id={id} className="bg-light-blue br3 pa3 ma2 grow bw2 shadow-5 cont">
            <img alt={id} src={`https://robohash.org/${name}?size=200x200`}/>
            <div>
                <h3 className='name'>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card