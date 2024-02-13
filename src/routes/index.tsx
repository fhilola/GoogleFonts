import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import SingleFont from './single-font/SingleFont'
import Cart from './cart/Cart'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
      </Route>
        <Route path='single-font/:family' element={<SingleFont />} />
        <Route path='cart' element={<Cart />} />
    </Routes>
  )
}

export default RouteController