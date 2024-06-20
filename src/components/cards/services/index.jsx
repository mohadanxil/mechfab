import style from './style.module.scss';

const ServiceCard =({image,title,listData,btnText})=>{
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.ImageSection}>
                <div className={style.imageOverlay}>

                </div>
                    <img src={image} alt="" />
                </div>
                <div className={style.Contents}>

                <div className={style.Title}>
                    <h2>{title}</h2>
                </div>
                <div className={style.list}>
                    {/* <ul> */}
                    {listData.map((item)=>{
                        return(
                        <li><span>{item.content}</span></li>
                        )
                    })}
                    {/* </ul> */}
                </div>
                {btnText&&
                <div className={style.actionBtn}>
                    <button>{btnText}</button>
                </div>
                }
                </div>
            </div>
        </div>
    )
}

export default ServiceCard