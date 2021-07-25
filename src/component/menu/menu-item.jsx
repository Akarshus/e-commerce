import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-styles.scss'

const MenuItem = ({ title, img, size, history, url, match }) => {

    return (
        <>
            <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${url}`)}>
                <div className='background' style={{
                    backgroundImage: `url(${img})`
                }}>
                    <div className='content'>
                        <h1 className='title'>{title}</h1>
                        <span className='subtitle'>Shop now</span>
                    </div>
                </div>
            </div>
        </>

    )
}
export default withRouter( MenuItem);