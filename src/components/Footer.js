import React from 'react'
import './Footer.css'


function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
    <div className='container d-flex align-items-center justify-content-center'>
        <p>Copyright {currentYear} Henry Ofoe Agbi-Kaiser</p>
    </div>
    </div>
  )
}

export default Footer