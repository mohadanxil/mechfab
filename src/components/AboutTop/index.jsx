import Legacy from '../Legacy';
import LegacyPara from '../LegacyPara';
import style from './style.module.scss';

const AboutTop = ()=>{
    return (
        <div className={style.Container}>
        
            <div className={style.Section}>
                <div className={style.Overlay}>

                </div>
                <div className={style.Legacy}>
                <Legacy/>

                </div>
                <div className={style.LegacyPara}>
                <LegacyPara/>
                    
                </div>
            </div>
        </div>
    )
}
export default AboutTop;