import spinner from '../../../assets/spinner.gif'
import './styles.css'

const Spinner = () => {
  return (
    <div className='spinner-box'>
      <p className='spinner-text'>Espere un momento...</p>
      <img className='spinner-img' src={spinner} alt='ilustración de una huella de perro, que sirve como spinner'></img>
    </div>
  )
}

export default Spinner