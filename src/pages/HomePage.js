import './HomePage.scss';

import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to favorite movies app!</h1>
      <p>Discover and save your favorite movies.</p>
      <img className='responsive-image' src="/new-remote-tv.jpg" alt="A woman holding a remote" />
    </div>
  )
}

export default HomePage
