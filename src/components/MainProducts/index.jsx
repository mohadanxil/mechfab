import React from 'react'
import style from './style.module.scss'
import imageRight from '../../assets/images/productsLeft.png'
import Vector from '../../assets/images/Clip_Group_24.png'
function MainProducts() {
  return (
    <div className={style.Container}>
    <div className={style.FadeBar}></div>
            <div className={style.Right}>
                <img src={imageRight} alt="" />
            </div>
        <div className={style.Section}>
            <div className={style.Left}>
            <div className={style.LeftSection}>
            <div className={style.TopSection}>
                <img src={Vector} alt="" />
                <h1 className={style.Title}>
                    Our Main <br></br>Products
                </h1>
            </div>
                <div className={style.Content}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque odit non cumque recusandae, cum rerum maxime dolore aspernatur voluptas quidem tempore alias ab accusamus, facilis deserunt aut amet eum fuga. Maiores at animi ad molestias in perspiciatis, assumenda voluptatum impedit nisi ipsam! Aliquid cumque ea dolorum fugit officiis atque quaerat numquam reprehenderit. Accusantium dolor, eius sit aspernatur totam debitis nulla distinctio ratione labore odio cupiditate mollitia?</p>
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default MainProducts