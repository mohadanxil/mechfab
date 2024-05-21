import React from 'react'
import style from './style.module.scss'
import image from '../../assets/images/largBanner.png'
import client1 from '../../assets/images/client/305966202_416081153962744_4674821798016669551_n.png'
import client2 from '../../assets/images/client/402122337_873552388107670_2678152037746562330_n.jpg'
import client3 from '../../assets/images/client/Bharat-Electronics-900x0.png'
import client4 from '../../assets/images/client/EpngeynUYAANEsX.png'
import client5 from '../../assets/images/client/Godrej-Logo.png'
import client6 from '../../assets/images/client/NPCIL-Logo-2.png'
import client7 from '../../assets/images/client/laro001_larsentoubro.png'
import client8 from '../../assets/images/client/larsen-toubro-limited-vector-logo.png'
function GroupCompanies() {
  const images = [client1,client2,client3,client4,client5,client6
  ,client7,client8]
  return (
    <div className={style.Container}>
            <div className={style.TopHeader}>
                <img src={image} alt="" />
            </div>
            
        <div className={style.Section}>
            <div className={style.ListofCompanies}>
            {images.map((item)=>{
                return(
                  <div className={style.Company}>
                <img src={item} alt="" />
                  </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default GroupCompanies