import React from 'react'
import { Router, Link } from 'react-router-dom'
import './header.scss'
import {ReactComponent as Logo}  from '../../../asset/crown.svg'

const Header = ()=>{
    return(
        <>
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to ='/shop' className='option'>Shop</Link>
                <Link to ='/shop' className='option'>Contact</Link>
                <Link to ='/login' className='option'>Login</Link>
            </div>
        </div>
        </>
    )
}
export default Header;