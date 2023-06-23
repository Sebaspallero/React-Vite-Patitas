import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer"
import Contact from "../../components/Contact/Contact"
import './styles.css'

const Home = () => {
  return (
    <main>
        <Hero/>
        <About/>
        <ProductsContainer/>
        <Contact/>
    </main>
  )
}

export default Home