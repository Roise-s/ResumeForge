import './styles/style.css'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <a href='https://kgaugelo.vercel.app/' target='_blank' className="myName">
        Kgaugelo.Dev
      </a>
      <div className="vv">
         &copy; {year} Resume Forge AI. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
