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
            title:"Manufacturing",
            image: dimension1
        },
        {
            id:"01",
            title:"Electroplating Services",
            image:dimension2
        },
        {
            id:"01",
            title:"Electroplating Capacity",
            image:dimension3
        },
        {
            id:"01",
            title:"Contact Manufacturing",
            image:dimension4
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
                        <DimensionCard key={item.id} title={item.title} image={item.image}/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Dimension;