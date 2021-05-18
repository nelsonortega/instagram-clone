import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navabr-logo'>logo</div>
        <SearchBar />
        <div className='navbar-icons'>icons</div>
      </div>
    </div>
  )
}

export default Navbar