import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import NavigationIcons from '../NavigationIcons/NavigationIcons'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>logo</div>
        <SearchBar />
        <NavigationIcons />
      </div>
    </div>
  )
}

export default Navbar