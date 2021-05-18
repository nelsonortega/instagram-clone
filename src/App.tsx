import React from 'react'
import Home from './pages/Home'
import Inbox from './pages/Inbox'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Explore from './pages/Explore'
import Settings from './pages/Settings'
import Navbar from './components/Navbar/Navbar'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/inbox' component={Inbox} />
        <Route path='/signin' component={SignIn} />
        <Route path='/profile' component={Profile} />
        <Route path='/explore' component={Explore} />
        <Route path='/settings' component={Settings} />
      </Router>
    </React.Fragment>
  )
}

export default App