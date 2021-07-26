import React from 'react'
import './preview.scss'
import Item from '../../collection/item'

const Preview =({title, items})=>{
    return(
        <>
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items.map((item)=>{
                        return < Item key={item.id} {...item}/>
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Preview;