import style from './style.module.scss';
import material1 from '../../assets/images/SEIcon.png';
import material2 from '../../assets/images/CRIcon.png';
import material3 from '../../assets/images/CuIcon.png';
import material4 from '../../assets/images/AlIcon.png';

const Materials = ()=>{
    const materialData = [
        {
            id:"01",
            title:"Steel",
            image:material1,
        },
        {
            id:"02",
            title:"Stainless Steell",
            image:material2,
        },
        {
            id:"03",
            title:"Copper and Copper Alloys",
            image:material3,
        },
        {
            id:"04",
            title:"Aluminium",
            image:material4,
        }
    ]
    return (
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Title}>
                    <h2><span>Materials</span> We Work On</h2>
                </div>
                <div className={style.materials}>
                    {materialData.map((item)=>{
                        return(
                            <div className={style.material}>
                                <div className={style.image}>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={style.head}>
                                    <p><span></span>{item.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Materials;