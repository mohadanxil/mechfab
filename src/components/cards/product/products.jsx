
import style from './style.module.scss';


const ProductsCard =({title,bold,Image})=>{
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Left}>
                    <div className={style.Image}>
                        <img src={Image} alt="" />
                    </div>
                </div>
                <div className={style.Right}>
                    <div className={style.Title}>
                        <h2 style={{marginBottom:bold==="Fabrication"?"20px":""}}><span>{bold}</span>{title}</h2>
                    </div>
                    <div className={style.ActionBtn}>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard;