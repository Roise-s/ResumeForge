import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <p className="myname">Kgaugelo.dev</p>
      <p className="copyright">© {year} All rights reserved.</p>
    </div>
  )
}

export default Footer
