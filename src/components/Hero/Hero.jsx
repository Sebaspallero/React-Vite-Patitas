import Button from "../../shared/components/Button/Button"
import wavesHero from "../../assets/waves.svg"
import './styles.css'


const Hero = () => {
  return (
    <section className='hero-box'>
        <div className='greeting-box'>
            <h2 className='greeting-message'><span className='accent-orange'>Hola!</span> bienvenido a nuestro Pet Shop.</h2>
            <Button text="Comprar" href="#productos"/>
        </div>
        <img src={wavesHero} className='waves-hero' alt='separador'></img>
    </section>
  )
}

export default Hero