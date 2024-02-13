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
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AiOutlineGlobal } from "react-icons/ai";
import { RxLetterSpacing } from "react-icons/rx";

const Home = () => {
  const [sorting, setSorting] = useState<string>('popularity')
  const[search, setSearch] = useState<string>('')
  const [size, setSize] = useState<number>(36)
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const { data } = useFetch(`&sort=${sorting}`)
  const searchData = useFetch(search?.length > 0 && `&family=${search}`)
  const [value, setValue] = useState<string>('')
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
        <Box style={
          {
            display: 'flex',
            alignItems: 'center',
            gap: '0 20px'
          }
        }>
        <FormControl style={{width: '150px', border: 'none'}}>
        <InputLabel id="demo-simple-select-label">{size}</InputLabel>
        <h3 className='select-title'>{size}px</h3>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label={size}
          onChange={(e)=>{
            setSize(e.target.value)
          }}
        >
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={32}>32</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={64}>64</MenuItem>
          <MenuItem value={96}>96</MenuItem>
          <MenuItem value={120}>120</MenuItem>
          <MenuItem value={184}>184</MenuItem>
          <MenuItem value={280}>280</MenuItem>
        </Select>
      </FormControl>
          <Slider max={300} min={8} onChange={(e)=>setSize(e.target.value)} defaultValue={size} aria-label="Default" valueLabelDisplay="auto" />
        </Box>

        <div className="filters">
          <h3>Filter</h3>
          <div className='country-selector'>
            <span className='filter-title'><AiOutlineGlobal />Language</span>
          <select>
            <option value="alllangauge">All Languages</option>
            <option value="Bengali">Bengali</option>
            <option value="alllangauge">All Languages</option>
            <option value="alllangauge">All Languages</option>
            <option value="alllangauge">All Languages</option>
            <option value="alllangauge">All Languages</option>
            <option value="alllangauge">All Languages</option>
          </select>
          </div>
          <div className="technology">
            <span className='filter-title'><RxLetterSpacing />Technology</span>
            <div className="technology-action">
              <button>Variable</button>
              <button>Color</button>
            </div>
          </div>
        </div>
      </aside>
      <section className='fonts'>
        <nav className='navbar'>
          <img className='logo' src={Logo} alt="" />
          <form className='logo-form'>
            <button><FiSearch /></button>
            <input type="text" placeholder='Search Fonts' onChange={(e)=>setSearch(e.target.value)}/>
            <select onChange={(e)=>setSorting(e.target.value)}>
              <option value="trending">Trending</option>
              <option value="popularity">Most Popular</option>
              <option value="date">Newest</option>
              <option value="alpha">Name</option>
            </select>
          </form>
          <button className='cart'><GrShop /></button>
        </nav>
        <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} appearence='filter'><IoClose />Filters</FilterButton>
        <div className="info">
          <span>{searchData?.data?.items?.length > 0 ? searchData?.data?.items?.length :  data?.items?.length } of 1603 families</span>
          <span title='Search results are based on font and font designer names which most closely match your query, and are ranked using the following factors: (1) web usage of the font family; (2) trend in web usage of the font family; (3) the number of styles in the font family; (4) the date the font family was added to Google Fonts; and/or (5) how applicable the font family is to the dominant language(s) in your country (based on your location and settings). The relative weight given to each factor is determined by the sorting method you choose—for example, the date the font family was added to Google Fonts will play a bigger role if you choose to sort by "Newest".'>About these results</span>
        </div>
        <div className="fonts__wrapper">
          {
            searchData?.data?.items?.length > 0 ?
            searchData?.data?.items?.map((font: any, index: number) => (
              <Link to={`single-font/${font.family}`} key={index} className='font-link'>
                <Font family_name={font.family} styles={font.variants.length} font={font.category} value={value} size={size}/>
              </Link>
            )):
            data?.items.map((font: any, index: number) => (
              <Link to={`single-font/${font.family}`} key={index} className='font-link'>
                <Font family_name={font.family} styles={font.variants.length} font={font.category} value={value} size={size}/>
              </Link>
            ))
          }
        </div>
      </section>
    </section>
  )
}

export default Home