import DimensionCard from '../cards/DimensionCard';
import style from './style.module.scss';
import Image from '../../assets/images/nutlBolt.jpg';
import dimension1 from '../../assets/images/dimensionPost1.png';
import dimension2 from '../../assets/images/dimensionPost2.png';
import dimension3 from '../../assets/images/dimensionPost3.png';
import dimension4 from '../../assets/images/dimensionPost4.png';

const Dimension = ()=>{
    const dimensionData = [
        {
            id:"01",
            slug:"Manufacturing",
            title:"Manufacturing",
            image: dimension1,
            url:"/services"
        },
        {
            id:"02",
            slug:"Electroplating-Services",
            title:"Electroplating Services",
            image:dimension2,
            url:"/services"

        },
        {
            id:"03",
            slug:"Electroplating-Capacity",
            title:"Electroplating Capacity",
            image:dimension3,
            url:"/services"

        },
        {
            id:"04",
            slug:"Contact-Manufacturing",
            title:"Contact Manufacturing",
            image:dimension4,
            url:"/services"

        }
    ]
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Title}>
                    <h2>Crafting Excellance<span> Across Dimensions</span></h2>
                </div>
                <div className={style.Cards}>
                {dimensionData.map((item)=>{
                    return(
                        <DimensionCard key={item.id} title={item.title} image={item.image} url={item?.url} slug={item?.slug}/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Dimension;