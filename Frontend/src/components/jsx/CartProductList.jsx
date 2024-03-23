

import css from '../styles/CartProductList.module.css'

const CartProductList = () => {
  return (
   <>  

    {/* Todo use map function for dynamic  */}
        <div className={css.container}>
            <div className={css.card}>
                <img src="https://via.placeholder.com/120x170" alt="" className={css.pImg}/>
                <div className={css.prdtNfo}>
                    <div className={css.header}><span className={css.title}>Title</span> <div className={css.dltIcn}> del</div></div>
                        <span className={css.sz}> Size:<span className={css.typ}>  Large</span></span>
                        <span className={css.clr}>Color: <span className={css.typ}> White</span></span>
                    <div className={css.qty}>
                        <span className={css.price}>$145</span>
                        <div className={css.btnsDiv}>
                            <button className={css.btn}>+</button>qty <button className={css.btn}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   </>
  )
}

export default CartProductList