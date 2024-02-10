import React from 'react'
import { IoClose } from "react-icons/io5";
import './Utils.scss'

const FilterButton = ({isOpen, setIsOpen, children, appearence}: {isOpen: boolean, setIsOpen: any, children: React.ReactNode, appearence: string}) => {
  return (
    <button className={`btn ${appearence}`} onClick={() => {
      if(isOpen){
        setIsOpen(false)
      }
      else{
        setIsOpen(true)
      }
    }}>{children}</button>
  )
}

export default FilterButton