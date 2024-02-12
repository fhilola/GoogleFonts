import React, { useState } from 'react'
import './Home.scss'
import Sidebar from '../../layout/sidebar/Sidebar'
import Logo from '../../assets/logo.png'
import { GrPowerReset, GrShop } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { IoClose } from 'react-icons/io5';
import { FilterButton, Font } from '../../utils/Utils'
import useFetch from '../../helpers/hooks/useFetch'
import { Link } from 'react-router-dom'

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const { data } = useFetch()
  const [value, setValue] = useState<string>('')
  console.log(data);
  return (
    <section className='home'>
      <Sidebar />
      <aside className={isOpen ? 'opening-sidebar ' : 'opening-sidebar open'}>
        <div className="reset-wrapper">
          <span className='reset'><GrPowerReset />Reset All</span>
          <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} appearence=''><IoClose /></FilterButton>
        </div>
        <label htmlFor="preview" className='preview-label'>Preview
          <textarea placeholder='Type Something' className='preview' cols={20} rows={20} id="preview" onChange={(e) => { setValue(e.target.value); }}></textarea>
        </label>
      </aside>
      <section className='fonts'>
        <nav className='navbar'>
          <img className='logo' src={Logo} alt="" />
          <form className='logo-form'>
            <button><FiSearch /></button>
            <input type="text" placeholder='Search Fonts' />
            <select>
              <option value="trending">Trending</option>
              <option value="mostpopular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="name">Name</option>
            </select>
          </form>
          <button className='cart'><GrShop /></button>
        </nav>
        <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} appearence='filter'><IoClose />Filters</FilterButton>
        <div className="info">
          <span>1595 of 1595 families</span>
          <span title='Search results are based on font and font designer names which most closely match your query, and are ranked using the following factors: (1) web usage of the font family; (2) trend in web usage of the font family; (3) the number of styles in the font family; (4) the date the font family was added to Google Fonts; and/or (5) how applicable the font family is to the dominant language(s) in your country (based on your location and settings). The relative weight given to each factor is determined by the sorting method you choose—for example, the date the font family was added to Google Fonts will play a bigger role if you choose to sort by "Newest".'>About these results</span>
        </div>
        <div className="fonts__wrapper">
          {
            data &&
            data?.items.map((font: any, index: number) => (
              <Link to={'/'} key={index} className='font-link'>
                <Font family_name={font.family} styles={font.variants.length} font={font.category} value={value} />
              </Link>
            ))
          }
        </div>
      </section>
    </section>
  )
}

export default Home