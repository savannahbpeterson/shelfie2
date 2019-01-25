import React from 'react';

export default function Product(props) {
    return (
        <div>Product
            <p>Product Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Image: <img src={props.imageUrl} alt="productImage"></img></p>
        </div>
    )
}


