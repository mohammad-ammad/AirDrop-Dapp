import React from 'react'
import './Cards.css';

const Cards = ({img,tag}) => {
  return (
    <div className="Card__wrappper">
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            {tag}
        </div>
    </div>
  )
}

export default Cards