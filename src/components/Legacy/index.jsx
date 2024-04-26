import style from './style.module.scss';
import image from '../../assets/images/aboutImageBg.png'
const Legacy = ()=>{
    return (
        <div className={style.Container}>
        <div className={style.Overlay}></div>
            <div className={style.Section}>
            <div className={style.Left}>
                <div className={style.Title}>
                    <h2><span>A Legacy </span>of <br></br><span>Innovation</span> <br></br>& Precision</h2>
                </div>
            </div>
                <div className={style.Right}>
                    <div className={style.Image}>
                        <div className={style.ImageOverlay}></div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Legacy