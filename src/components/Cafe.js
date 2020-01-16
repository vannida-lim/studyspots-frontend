import React from 'react'

const Cafe = ({cafe}) => {
    return (
        <div>
            <p>Name: {cafe.name}</p>
            <p>Address: {cafe.address}</p>
            <p>Rating: {cafe.rating}</p>
            <p>Price: {cafe.price}</p>
        </div>
    )
}

export default Cafe;