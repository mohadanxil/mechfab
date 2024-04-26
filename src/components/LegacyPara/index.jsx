import style from './style.module.scss';

const LegacyPara = ()=>{
    return(
        <div className={style.Container}>
        <div className={style.Overlay}></div>
            <div className={style.Section}>
                <div className={style.Right}>
                    <p>Over the past four decades.<br></br>
Mec Fab Engineering Works and Master
Engineering, under the visionary leadership of Mr. Seth, have solidified their position as premier suppliers to giants in General Engineering, Class, Plastics, and Automotive Industries. In 2011, Mr. Seth's son, Ashish Seth joined the endeavor. infusing new energy and perspective into the family business.</p>
                </div>
                <div className={style.Right}>
                <div className={style.ImageOverlay}></div>
                    <p>The year 2015 marked a pivotal moment as we expanded our horizons to coatings and electroplating. giving birth to Suchira Electroplater. This strategic move allowed us to offer comprehensive solutions to our valued customers. United by a common purpose, Mec Fab Engineering Works, Master Engineers, and Suchira Electroplaters formally merged into a singular force - Mec Fab Engineering Works Private Limited in 2023.</p>
                </div>
            </div>
        </div>
    )
}

export default LegacyPara