import React from 'react'
import Sidebar from '../../layout/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { FiSearch } from 'react-icons/fi'

const Cart = () => {
    return (
        <div className='single-fonts'>
            <Sidebar />
            <div className="fonts">
                <section className="sticky">
                <nav className='navbar'>
                    <Link to='/'><img className='logo' src={Logo} alt="" /></Link>
                </nav>
            </section>
            </div>
        </div>
    )
}

export default Cart