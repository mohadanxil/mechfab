import style from './style.module.scss';
import Image from '../../assets/images/ServiceProduct.png'
import CheckImage from '../../assets/svgs/Check.svg'
const ProductContents = ()=>{
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Left}>
                    <div className={style.Title}>
                        <h2>Images & Videos</h2>
                    </div>
                    <div className={style.Description}>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end
of the day, going forward, a new normal that has evolved from generation X is on the
runway heading towards a streamlined cloud solution.</p>
                    </div>
                    <div className={style.ListImages}>
                        <img src={Image} alt="" />
                    </div>
                <div className={style.Title}>
                        <h2>Benefit of Products</h2>
                    </div>
                    <div className={style.Description}>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end
of the day, going forward, a new normal that has evolved from generation X is on the
runway heading towards a streamlined cloud solution.</p>
                    </div>
                    <div className={style.ServiceList}>
                        <ul>
                            <li>
                                <div className={style.Icon}>
                                    <img src={CheckImage} alt="" />
                                </div>
                                <div className={style.Content}>
                                    <p>Quality Products</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.Right}>
                </div>
            </div>
        </div>
    )
}

export default ProductContents;