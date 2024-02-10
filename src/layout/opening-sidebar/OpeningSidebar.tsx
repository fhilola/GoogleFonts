import React, { useState } from 'react'
import './OpeningSidebar.scss'
import { GrPowerReset } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import FilterButton from '../../utils/Utils';
const OpeningSidebar = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: any}) => {
  return (
    <aside  className={isOpen ? 'opening-sidebar ' : 'opening-sidebar open'}>
      <div className="reset-wrapper">
        <span className='reset'><GrPowerReset />Reset All</span>
        <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} appearence=''><IoClose /></FilterButton>
      </div>
      <label htmlFor="preview" className='preview-label'>Preview
        <textarea className='preview' cols={20} rows={20} id="preview">Type Something...</textarea>
      </label>
    </aside>
  )
}

export default OpeningSidebar