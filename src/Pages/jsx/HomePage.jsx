import css from '../styles/HomePage.module.css'
import Hero from "../../components/jsx/Hero"
import ProductRow from "../../components/jsx/ProductsRow"
const HomePage = () => {
  return (
    <>
    <Hero/>
    <div>
      Product listing 
    </div>    
<ProductRow/>

    </>
  )
}

export default HomePage