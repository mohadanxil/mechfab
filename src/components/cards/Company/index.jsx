import style from './style.module.scss';

const CompanyCard = ({image,title,listData})=>{
    return(
        <div className={style.Container}>
                <div className={style.Image}>
                    <img src={image} alt="" />
                </div>
            <div className={style.Section}>
                <div className={style.Contents}>
                <div className={style.Title}>
                    <h2>{title}</h2>
                </div>
                <ul className={style.listContents}>
                    {listData.map((item)=>{
                        return(
                        <li className={style.row}>
                            <div className={style.input}>
                        <span></span>
                                <h2>{item.title}: </h2>
                            </div>
                            <div className={style.answer}>
                                <p>{item.content}</p>
                            </div>
                        </li>
                        )
                    })}

                </ul>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard;