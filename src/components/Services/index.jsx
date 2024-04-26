import ServiceCard from '../cards/services';
import style from './style.module.scss';
import nutlBolt from '../../assets/images/nutlBolt.jpg'
import image1 from '../../assets/images/ZincBanner.png'
import image2 from '../../assets/images/NickBanner.png'
import image3 from '../../assets/images/ZincPlatingBanner.png'
import image4 from '../../assets/images/CopperBanner.png'
import image5 from '../../assets/images/CadmiumBanner.png'
import image6 from '../../assets/images/AcidBanner.png'

const ServicePage = ()=>{
    const listData = [
        {
            title:"Zinc-Nickel ALloy Plating With",
            image:image1,
            listContent:[
        {
            content:" Trivalent Clear Blue Passivation",
        },
        {
            content:"Iridescent Yellow Passivation"
        },
        {
            content:"Olive Green Passivation"
        },
        {
            content:"Black Passivation"
        }
    ]
        },
        {
            title:"Nickel Plating",
            image:image2,
            listContent:[
        {
            content:" Trivalent Clear Blue Passivation",
        },
        {
            content:"Iridescent Yellow Passivation"
        },
        {
            content:"Olive Green Passivation"
        },
        {
            content:"Black Passivation"
        }
    ]
        },
        {
            title:"Zinc Plating With",
            image:image3,
            listContent:[
        {
            content:" Trivalent Clear Blue Passivation",
        },
        {
            content:"Iridescent Yellow Passivation"
        },
        {
            content:"Olive Green Passivation"
        },
        {
            content:"Black Passivation"
        }
    ]
        },
        {
            title:"Copper Plating",
            image:image4,
            listContent:[
        {
            content:" Trivalent Clear Blue Passivation",
        },
        {
            content:"Iridescent Yellow Passivation"
        },
        {
            content:"Olive Green Passivation"
        },
        {
            content:"Black Passivation"
        }
    ]
        },
        {
            title:"Cadmium Plating With",
            image:image5,
            listContent:[
        {
            content:" Trivalent Clear Blue Passivation",
        },
        {
            content:"Iridescent Yellow Passivation"
        },
        {
            content:"Olive Green Passivation"
        },
        {
            content:"Black Passivation"
        }
    ]
        },
        {
            title:"Acid Tin Plating",
            image:image6,
            listContent:[
        {
            content:" Trivalent Clear Blue Passivation",
        },
        {
            content:"Iridescent Yellow Passivation"
        },
        {
            content:"Olive Green Passivation"
        },
        {
            content:"Black Passivation"
        }
    ]
        }
    ]
    return (
        <div className={style.Container}>
            <div className={style.Section}>
            <div className={style.Title}>
                <h2>Electroplating</h2>
            </div>
                <div className={style.Cards}>
                    {listData?.map((item)=>{
                        return(
                            <ServiceCard title={item.title} listData={item.listContent} image={item.image} btnText="Read More"
/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ServicePage;