import InsertImgs from "../../components/jsx/InsertImgs"
import InsertProdInfo from "../../components/jsx/InsertProdInfo"
import css from "../styles/AddProduct.module.css"


const AddProduct = () => {
  return (
    <>
    <div className={css.container}>

    <InsertProdInfo/>
    <InsertImgs/>
    </div>

    </>
  )
}

export default AddProduct