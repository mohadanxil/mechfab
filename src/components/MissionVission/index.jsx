import React from 'react'
import style from './style.module.scss'
import stillImage from '../../assets/images/missionLogo.png'
import bgVector from '../../assets/images/Vector 2.svg'
import stillImage2 from '../../assets/images/differentLogo.png'

function MissionVission() {
  return (
    <div className={style.Container}>
        <div className={style.Section}>
            <div className={style.Left}>
                <div className={style.Image}>
                    <img src={bgVector} alt="" />
                    <h1 className={style.Title}>What make us Different</h1>
                    <div className={style.stillImage}>
                        <img src={stillImage} alt="" />
                    </div>
                </div>
                <div className={style.Content}>
                    <p>In a competitive landscape,, we stand ve landscape,, we stand In a competitive landscape,, we stand ve landscape,, we stand
In a competitive landscape,, we stand ve landscape,, we stand
In a competitive landscape,, we stand ve landscape,, we stand</p>
                </div>
            </div>
            <div className={style.Right}>
                <div className={style.Image}>
                    <img src={bgVector} alt="" />
                    <h1 className={style.Title}>Our Mission</h1>
                    <div className={style.stillImage}>
                        <img src={stillImage2} alt="" />
                    </div>
                </div>
                <div className={style.Content}>
                    <p>In a competitive landscape,, we stand ve landscape,, we stand In a competitive landscape,, we stand ve landscape,, we stand
In a competitive landscape,, we stand ve landscape,, we stand
In a competitive landscape,, we stand ve landscape,, we stand</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MissionVission