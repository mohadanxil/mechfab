import style from './style.module.scss';
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from '../../assets/images/ServiceProduct.png'
const ProductService = ()=>{
    return(
        <div className={style.Container}>
            <div className={style.Section}>
            <div className={style.Right}>
                <div className={style.Tagline}>
                    <p>Machines</p>
                </div>
                <div className={style.Title}>
                    <h2>Machines we provide</h2>
                </div>
                <div className={style.Description}>
                    <p>We have sophisticated multi-axis machines for all
machining operations like milling, drilling, and turning of bar
stock, tubing, castings and forgings. Moreover, we have
surveyed cutting steel, stainless steel, brass, bronze, or
aluminum shops for ensuring the compliance with all set
quality standards.</p>
                </div>
                <div className={style.List}>
                    <ul>
                        <li>
                        <div className={style.Head}>
                            <h2>Gear Box Machining</h2>
                            <div className={style.Icon}>
                            <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <div className={style.answer}>
                            <p></p>
                        </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={style.Left}>
                <img src={Image} alt="" />
            </div>
            </div>
        </div>
    )


}

export default ProductService;