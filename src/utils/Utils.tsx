import React from 'react'
import { IoClose } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import './Utils.scss'


interface FontProps {
    family_name: string
    styles: number
    font: string
    value?: string
}


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

const Font = ({ family_name, styles, font, value }: FontProps) => {
    return (
        <>
            <div className='single-font'>
                <h3>{family_name}</h3>
                <p>{styles} styles</p>
                <span>{font}</span>
            </div>
                <h1 className='font-text' style={{ fontFamily: 'sans-serif' }}>{value && value?.length > 0 ? value : 'Everyone has the right to freedom of thoughts, consistence and ...'}</h1>
        </>
    )
}

export {FilterButton, Font}