import style from './style.module.scss';
import star from '../../../assets/images/starsTestimonials.png'
const TestimonialCard = ({content,stars,userInfo})=>{
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.QuoteImage}>
                    <img src="" alt="" />
                </div>
                <div className={style.Content}>
                    <p>{content}</p>
                </div>
                <div className={style.Stars}>
                {/* {new Array(stars).fill(0).map((item)=>{
                    return( */}
                    <img src={star} alt="" />
                    {/* ) */}
                {/* })} */}
                </div>
                <div className={style.UserInfo}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;