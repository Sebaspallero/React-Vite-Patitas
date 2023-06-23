import './styles.css'
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaw} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <div className="custom-shape-divider-bottom-1662601485">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
      </div>
    <div className='footerBox'>
        <div>
          <Link to={'/'} className="header-brand-name-white subtitle"><FontAwesomeIcon className="header-brand-icon" icon={faPaw} /> Patitas</Link>
        </div>
        <ul className='menu-item-list-footer'>
          <Link to='/' className="menu-item-white text">HOME</Link>
          <a href='#nosotros' className="menu-item-white text">NOSOTROS</a>
          <a href='#productos' className="menu-item-white text">PRODUCTOS</a>
          <a href='#contacto' className="menu-item-white text">CONTACTO</a>
        </ul>
        <ul className='socialBox'>
            <a href='https://twitter.com/' target="_blank" rel="noreferrer" className='socialItem text'><FontAwesomeIcon className='brandFooter' icon={faTwitter} />Twitter</a>
            <a href='https://www.linkedin.com/in/sebastian-pallero-or%C3%ADa-a911591a1/' target="_blank" rel="noreferrer"  className='socialItem text'><FontAwesomeIcon  className='brandFooter' icon={faLinkedin} />Linkedin</a>
            <a href='https://github.com/Sebaspallero' target="_blank" rel="noreferrer"  className='socialItem'><FontAwesomeIcon  className='brandFooter text' icon={faGithub} />GitHub</a>
        </ul>
        <p className='text disclaimer'>2023 React.js E-commerce ~ <a href='https://www.linkedin.com/in/sebastian-pallero-or%C3%ADa-a911591a1/' target="_blank" rel="noreferrer">Sebastián Pallero Oría</a></p>
    </div>
    </footer>
  )
}

export default Footer