import style from './style.module.scss';
import BgImage from '../../assets/images/bgImage.png'
const Banner = ({type="",title="",description="",LImage="",RImage="",BgImage=""})=>{
    console.log(BgImage);
    return (
        <div className={style.Container}>
            <div className={style.Section} style={{backgroundImage:`url(${BgImage})`}}>
            <div className={`${style.imageSection} ${title==="Products"?style.ProductImageSection:""}`}>
                {LImage!==""?<img src={LImage} alt="" />:""}
            </div>
                <div className={style.Content} style={{backgroundImage:`url(${RImage!==""?RImage:"transparent"})`}}>
                {title==="Contact Us"||title==="Products"?"":<div className={style.overlay}></div>}
                <div className={style.Details}>
                        <div className={style.Title}>
                            <h2>{title}</h2>
                        </div>
                        {type==="Description"?
                            <div className={style.Description}>
                                <p>{description}</p>
                            </div>
                        :""}

                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;