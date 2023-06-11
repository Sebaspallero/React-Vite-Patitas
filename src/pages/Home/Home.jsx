import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <ProductsContainer/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home