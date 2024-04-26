import style from './style.module.scss'
import Image from '../../../assets/images/LeftProduct.png'

const ProductDetail =()=>{
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Image}>
                    <img src={Image} alt="" />
                </div>
                <div className={style.Contents}>
                    <div className={style.Tagline}>
                        <p>Service Details</p>
                    </div>
                    <div className={style.Title}>
                        <h2>Precision Machining
Services</h2>
                    </div>
                    <div className={style.Description}>
                        <p>We have emerged as a distinguishing service provider of
Precision Machining.Our organization has professionals tie-
ups with some of the high-end machining setups in India
for machining as well as CNC machining.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;