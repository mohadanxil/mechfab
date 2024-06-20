import style from './style.module.scss';
import {Link} from 'react-router-dom'
const DimensionCard = ({title,image,url,slug})=>{
    return (
        <Link to={`${url}?service=${slug}`} className={style.Container} onClick={()=>{
                        // navigate("/services")       
                    }}>
            <div className={style.Section}>
                <div className={style.Image}>
                    <img src={image} alt="" />
                </div>
                <div className={style.TitleBtn}>
                    <h2>{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default DimensionCard;