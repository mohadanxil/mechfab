import style from './style.module.scss';

const DimensionCard = ({title,image})=>{
    return (
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Image}>
                    <img src={image} alt="" />
                </div>
                <div className={style.TitleBtn}>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default DimensionCard;