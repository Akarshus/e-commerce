import React from 'react'
import './item.scss'

const Item=({id, name, price, imageUrl})=>{
    console.log(imageUrl);
    return(
        <>
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage:`url(${imageUrl})`
                
            }}> </div>
            <div className='collection-footer'>
                <span className='name'> {name}</span>
                <span className='price'> ${price}</span>
            </div>
        </div>
        </>
    )
}

export default Item;