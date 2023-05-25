import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <div>
      <h2><a href='#top'>Rick And Morty</a></h2>
      <div className='flex'>
        <div className=''>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=''>
          <ul>
            <li>Find Us</li>
            <li>Support Us</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className=''>
          <ul>
            <li>Docs</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <p>By <span>@tamanchichan</span> {year}.</p>
    </div>
  )
}

export default Footer;