import React from 'react'
import style from './productList.style.module.scss'
import { useNavigate } from 'react-router-dom'
function ProductList({title,data}) {
    const navigate = useNavigate()
  return (
    <div className={style.Container}>
    <div className={style.Section}>
        <div className={style.Title}>
            <h1>{title}</h1>
        </div>
        <div className={style.CardList}>
        {data?.map((card)=>{
            return(
                <div className={style.Card} onClick={()=>{
                    navigate(`/product-description/${title.split(" ").join("-")}`)
                }}>
                    <div className={style.Image}>
                        <img src={card?.image} alt="" />
                    </div>
                    <div className={style.Content}>
                        <p>{card?.content}</p>
                    </div>
                </div>
            )
        })}

        </div>

    </div>
    </div>
  )
}

export default ProductList