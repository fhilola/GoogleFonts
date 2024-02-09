import React from 'react'
import './Home.scss'
import Sidebar from '../../layout/sidebar/Sidebar'
import OpeningSidebar from '../../layout/opening-sidebar/OpeningSidebar'

const Home = () => {
  return (
    <section className='home'>
        <Sidebar/>
        <OpeningSidebar/>
    </section>
  )
}

export default Home