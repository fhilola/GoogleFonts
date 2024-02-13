import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import SingleFont from './single-font/SingleFont'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
      </Route>
        <Route path='single-font/:family' element={<SingleFont />} />
    </Routes>
  )
}

export default RouteController