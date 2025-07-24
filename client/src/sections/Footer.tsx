

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <a href="https://kgaugelo.vercel.app/" target="_blank" rel="noopener noreferrer">
        <p className="myname">Kgaugelo.dev</p>
      </a>
      <p className="copyright">© {year} All rights reserved.</p>
    </div>
  )
}

export default Footer
