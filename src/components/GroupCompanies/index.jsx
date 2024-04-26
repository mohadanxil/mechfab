import React from 'react'
import style from './style.module.scss'
import image from '../../assets/images/largBanner.png'
function GroupCompanies() {
  return (
    <div className={style.Container}>
            <div className={style.TopHeader}>
                <img src={image} alt="" />
            </div>
            
        <div className={style.Section}>
            <div className={style.ListofCompanies}>
            {Array(9).fill(0).map((item)=>{
                return(
                <img src="https://www.godrej.com/img/svg/GnB-logo.svg" alt="" />
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default GroupCompanies