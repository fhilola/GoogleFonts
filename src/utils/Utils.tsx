import React from 'react'
import './Utils.scss'



interface FontProps {
    family_name: string
    styles: number
    font: string
    value?: string
    size?: number
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

const Font = ({ family_name, styles, font, value, size }: FontProps) => {

  
    return (
        <>
            <div className='single-font'>
                <h3>{family_name}</h3>
                <p>{styles} styles</p>
                <span>{font}</span>
            </div>
                <h1 className='font-text' style={{ fontFamily: `${family_name}, ${font}`, fontSize: size === 0 || size === 1 || size === 2 || size === 3 || size === 4 || size === 5 || size === 6 || size === 7 || size === 8 ? '8px' : `${size}px`}}>{value && value?.length > 0 ? value : value === '' ? 'Everyone has the right to freedom of thoughts, consistence and ...' : value }</h1>
        </>
    )
}

export {FilterButton, Font}