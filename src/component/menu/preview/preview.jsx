import React from 'react'
import './preview.scss'

const Preview =({title, items})=>{
    return(
        <>
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items.map((item)=>{
                        return <div key={item.id}> {item.name} </div>
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Preview;