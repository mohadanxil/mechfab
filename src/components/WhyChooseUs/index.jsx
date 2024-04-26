import style from './style.module.scss';
import image from '../../assets/images/WHyChooseImage.png'
import WhyImage from '../../assets/images/aboutUsMission.png'
const WhyChooseUs = ()=>{
    return(
        <div className={style.Container}>
        <div className={style.Shape}></div>
        <div className={style.ImageOverlay}></div>
            <div className={style.Section}>
                <div className={style.Left}>
                <div className={style.Image}>

                    <img src={WhyImage} alt="" />
                    <h1 className={style.Title}>Why Choose Us</h1>
                    <div className={style.Content}>
                        <p>The year 2015 marked a pivotal moment as we expanded our horizons to coatings and electroplating. giving birth to Suchira Electroplater. This strategic move allowed us to offer comprehensive solutions to our valued customers. United by a common purpose, Mec Fab Engineering Works, Master Engineers, and Suchira Electroplaters formally merged into a singular force - Mec Fab Engineering Works Private Limited in 2023.</p>
                    </div>
                </div>
                </div>
                <div className={style.Right}>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;