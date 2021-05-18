import './NavigationIcons.css'
import { Link } from 'react-router-dom'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as InboxIcon } from '../../assets/icons/inbox.svg'
import { ReactComponent as ExploreIcon } from '../../assets/icons/explore.svg'
import { ReactComponent as NotificationsIcon } from '../../assets/icons/notifications.svg'

const NavigationIcons = () => {
  return (
    <div className='navbar-icons'>
      <Link className='text-link' to='/'><HomeIcon className='icon' /></Link>
      <Link className='text-link' to='/inbox'><InboxIcon className='icon' /></Link>
      <Link className='text-link' to='/explore'><ExploreIcon className='icon' /></Link>
      <NotificationsIcon className='icon' />
    </div>
  )
}

export default NavigationIcons