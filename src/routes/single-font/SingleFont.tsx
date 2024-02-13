import { MutableRefObject, useEffect, useRef, useState } from 'react'
import './SingleFonts.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../helpers/hooks/useFetch'
import Sidebar from '../../layout/sidebar/Sidebar'
import { FiSearch } from 'react-icons/fi'
import Logo from '../../assets/logo.png'
import { GrShop } from 'react-icons/gr'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Slider } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SingleFont = () => {
  const [value, setValue] = useState<string>('')
  const [sorting, setSorting] = useState<string>('popularity')
  const [search, setSearch] = useState<string>('')
  const { family } = useParams()
  const { data } = useFetch(`&family=${family}`)
  console.log(data);
  const [size, setSize] = useState<number>(36)
  const navigate = useNavigate()

  useEffect(()=>{
    if(search.length > 0){
      navigate('/')
    }
  },[search])

  const getFont = useRef()
  console.log(getFont.current);
  

  return (
    <div className='single-fonts'>
      <Sidebar />
      <div className="fonts">
        <section className="sticky">
          <nav className='navbar'>
          <Link to='/'><img className='logo' src={Logo} alt="" /></Link>
          <form className='logo-form'>
            <button><FiSearch /></button>
            <input type="text" placeholder='Search Fonts' onChange={(e)=>setSearch(e.target.value)} />
            <select onChange={(e) => setSorting(e.target.value)}>
              <option value="trending">Trending</option>
              <option value="popularity">Most Popular</option>
              <option value="date">Newest</option>
              <option value="alpha">Name</option>
            </select>
          </form>
          <Link to='/cart' className='cart'><GrShop /></Link>
        </nav>
        <div className="single-fonts-action">
          <div className="action">
            <button>Specimen</button>
            <button>Type tester</button>
            <button>Glyphs</button>
            <button>About & license</button>
          </div>
          <button ref={getFont} className="download" onClick={()=>{
            localStorage.setItem('font', JSON.stringify(data.items))
            getFont.current.innerHTML = 'Remove font Family'
          }}>Get font</button>
        </div>
        </section>
        <div className="font">
          {
            data?.items?.slice(200, 300).map((item: any) =>
              <div className='single-font-info'>
                <h1 className='single-font-title'>{item.family}</h1>
                <span className='author'>Designed by <Link to='/'> Kimdir</Link> </span>
                <h2 className='font-showcase'>Whereas disregard and contempt for human rights have resulted</h2>
                <div className="selection">
                  <label className='selection-label' htmlFor="">Select preview text:
                    <select name="" id="">
                      <option value="Continent">Continent</option>
                      <option value="Continent">Continent</option>
                      <option value="Continent">Continent</option>
                      <option value="Continent">Continent</option>
                      <option value="Continent">Continent</option>
                      <option value="Continent">Continent</option>
                      <option value="Continent">Continent</option>
                      <option value="Continent">Continent</option>
                    </select>
                    <select name="" id="">
                      <option value="language">Language</option>
                      <option value="language">Language</option>
                      <option value="language">Language</option>
                      <option value="language">Language</option>
                      <option value="language">Language</option>
                      <option value="language">Language</option>
                      <option value="language">Language</option>
                    </select>
                  </label>
                </div>
              </div>
            )
          }
          <h2 className='styles'>Styles</h2>
          <div className="checking">
            <Box
            
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '90ch'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField 
              onChange={(e)=>setValue(e.target.value)}
              className='text-field'
              style={{
              color: '#fff'
            }}
               id="outlined-basic" label="Type here to preview text" variant="outlined" />
            </Box>
            <Box style={
              {
                display: 'flex',
                alignItems: 'center',
                gap: '0 20px'
              }
            }>
              <FormControl style={{ width: '70px', border: 'none' }}>
                <InputLabel id="demo-simple-select-label">{size}</InputLabel>
                <h3 className='select-title'>{size}px</h3>
                <Select
                style={{
                  width: '70px'
                }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label={size}
                  onChange={(e) => {
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
              <Slider max={300} min={8} onChange={(e) => setSize(e.target.value)} defaultValue={size} aria-label="Default" valueLabelDisplay="auto" style={{ width: '400px' }} />
            </Box>
          </div>
        </div>
        <div className="variants">
          {
            data?.items[0]?.variants?.map((variant: any, index: number)=>
              <div key={index} className='variant-font'>
                <span>{variant.includes('100') ? ` Thin` : variant.includes('300') ? ` light` : variant.includes('400') ? ` Regular` : variant.includes('500') ? ` Medium` : variant.includes('600') ? ` SemiBold` : variant.includes('700') ? ` Bold` : variant.includes('800') ? ` ExtraBold` : variant.includes('900') ? ` Black` : variant.includes('regular') ? '' : variant.includes('italic') ? '' : variant} {variant} </span>
                {
                  variant.includes('italic') ? 
                  <i style={{fontWeight: variant.includes('italic') && `${variant.slice(3, 8)}`, fontSize: `${size}px`}}>{value && value?.length > 0 ? value : 'Everyone has the right to freedom of thoughts, consistence and ...'}</i>
                  :
                  <h3 style={{fontWeight: `${variant}`, fontSize: `${size}px`}}>{value && value?.length > 0 ? value : 'Everyone has the right to freedom of thoughts, consistence and ...'}</h3>
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SingleFont