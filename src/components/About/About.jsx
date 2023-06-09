import AboutImg from '../../assets/about.png'
import Button from '../../shared/components/Button/Button'
import './styles.css'

const About = () => {
  return (
    <div className='about-box'>
        <img className='about-img' src={AboutImg} alt='imagen sobre nosotros'></img>
        <div className='about-info-box'>
            <h2 className='section-title'>Sobre <span className='title-accent'>Nosotros</span></h2>
            <p className='info-section'>Patitas es un servicio de comida para mascotas premium. Nuestros productos se basan en ofrecer alimentos organicos y libres de conservantes al mejor precio posible para nuestros clientes.</p>
            <Button text="Conocer Más" href="https://github.com/Sebaspallero" target="_blank"/>
        </div>
    </div>
  )
}

export default About