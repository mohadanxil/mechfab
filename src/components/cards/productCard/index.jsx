import style from './style.module.scss';
import {} from 'react-icons';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const ProductCard = ({title,icon})=>{
    const navigate = useNavigate()
    const pageUrl = title?.toLowerCase()?.split(" ")?.join("-")
    return (
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Icon}>
                    <img src={icon} alt="" />
                </div>
                <div className={style.Title}>
                    <h2>{title}</h2>
                </div>
                <button className={style.Btn} onClick={()=>{
                    navigate(`${pageUrl}`)
                }}>
                    Discover More <FaLongArrowAltRight />
                </button>
            </div>
        </div>
    )
}

export default ProductCard;