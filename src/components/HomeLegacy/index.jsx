import style from './style.module.scss';
import image from '../../assets/images/about.png'
const HomeLegacy = ()=>{
    return (
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Left}>
                    <div className={style.ImageOverlay}></div>
                    <div className={style.Image}>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className={style.Right}>
                    <div className={style.Title}>
                        <h2>A Legacy of<span> Innovation <br></br>& Precision</span></h2>
                    </div>
                    <div className={style.Content}>
                        <p>In the vibrant tapestry of engineering
excelence, Mec Fab Engineering Works Pvt.
Ltd. stands as a beacon of innovation.
a testament to the vision of our founder.
Mr. Ravi Snankar Seth. in 1979, lueled by
apessicn cor cngineering and arred wiln
years of expononce in an MSME company.
Mi Seth emberked on a transiormative
Journey. What began as a modest rental manu lacturing unitin Mumbai has evolved into a dynamic force, boasting two
companies in Naw Mumbal</p>
                    </div>
                    <div className={style.ActionBtn}>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLegacy;