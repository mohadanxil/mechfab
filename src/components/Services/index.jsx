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
    // const listData = [
    //     {
    //         title:"Zinc-Nickel ALloy Plating With",
    //         image:image1,
    //         listContent:[
    //     {
    //         content:" Trivalent Clear Blue Passivation",
    //     },
    //     {
    //         content:"Iridescent Yellow Passivation"
    //     },
    //     {
    //         content:"Olive Green Passivation"
    //     },
    //     {
    //         content:"Black Passivation"
    //     }
    // ]
    //     },
    //     {
    //         title:"Nickel Plating",
    //         image:image2,
    //         listContent:[
    //     {
    //         content:" Trivalent Clear Blue Passivation",
    //     },
    //     {
    //         content:"Iridescent Yellow Passivation"
    //     },
    //     {
    //         content:"Olive Green Passivation"
    //     },
    //     {
    //         content:"Black Passivation"
    //     }
    // ]
    //     },
    //     {
    //         title:"Zinc Plating With",
    //         image:image3,
    //         listContent:[
    //     {
    //         content:" Trivalent Clear Blue Passivation",
    //     },
    //     {
    //         content:"Iridescent Yellow Passivation"
    //     },
    //     {
    //         content:"Olive Green Passivation"
    //     },
    //     {
    //         content:"Black Passivation"
    //     }
    // ]
    //     },
    //     {
    //         title:"Copper Plating",
    //         image:image4,
    //         listContent:[
    //     {
    //         content:" Trivalent Clear Blue Passivation",
    //     },
    //     {
    //         content:"Iridescent Yellow Passivation"
    //     },
    //     {
    //         content:"Olive Green Passivation"
    //     },
    //     {
    //         content:"Black Passivation"
    //     }
    // ]
    //     },
    //     {
    //         title:"Cadmium Plating With",
    //         image:image5,
    //         listContent:[
    //     {
    //         content:" Trivalent Clear Blue Passivation",
    //     },
    //     {
    //         content:"Iridescent Yellow Passivation"
    //     },
    //     {
    //         content:"Olive Green Passivation"
    //     },
    //     {
    //         content:"Black Passivation"
    //     }
    // ]
    //     },
    //     {
    //         title:"Acid Tin Plating",
    //         image:image6,
    //         listContent:[
    //     {
    //         content:" Trivalent Clear Blue Passivation",
    //     },
    //     {
    //         content:"Iridescent Yellow Passivation"
    //     },
    //     {
    //         content:"Olive Green Passivation"
    //     },
    //     {
    //         content:"Black Passivation"
    //     }
    // ]
    //     }
    // ]
    const listData = [
        {
            title: "Zinc-Nickel Alloy Plating With",
            image: image1,
            listContent: [
                { content: "Clear Grey Passivation" },
                { content: "Iridescent Blue Passivation" },
                { content: "Iridescent Yellow Passivation" },
                { content: "Black Passivation" }
            ]
        },
        {
            title: "Zinc Plating With",
            image: image3,
            listContent: [
                { content: "Trivalent Clear Blue Passivation" },
                { content: "Iridescent Yellow Passivation" },
                { content: "Olive Green Passivation" },
                { content: "Black Passivation" }
            ]
        },
        {
            title: "Cadmium Plating With",
            image: image5,
            listContent: [
                { content: "Iridescent Yellow Passivation" },
                { content: "Olive Green Passivation" },
                { content: "White Passivation" }
            ]
        },
        {
            title: "Nickel Plating",
            image: image2,
            listContent: [
                { content: "Dull Nickel" },
                { content: "Bright Nickel" }
            ]
        },
        {
            title: "Acid Tin Plating",
            image: image6,
            listContent: []
        },
        {
            title: "Copper Plating",
            image: image4,
            listContent: []
        },
        {
            title: "Combination Plating",
            image: null, // Assuming no image provided for new titles
            listContent: [
                { content: "Copper Blackening" },
                { content: "Copper + Tin Plating" },
                { content: "Copper + Nickel + Tin Plating" },
                { content: "Copper + Nickel + Cadmium Plating (Diffusion Coating)" }
            ]
        },
        {
            title: "Passivation",
            image: null, // Assuming no image provided for new titles
            listContent: [
                { content: "Stainless Steel" },
                { content: "Titanium" },
                { content: "Brass" }
            ]
        },
        {
            title: "Electropolishing of Stainless Steel",
            image: null, // Assuming no image provided for new titles
            listContent: []
        },
        {
            title: "Chemical Phosphating",
            image: null, // Assuming no image provided for new titles
            listContent: [
                { content: "Zinc Phosphating" },
                { content: "Manganese Phosphating" }
            ]
        },
        {
            title: "Blackening / Blackodising",
            image: null, // Assuming no image provided for new titles
            listContent: []
        },
        {
            title: "Chromate Conversion on Aluminium",
            image: null, // Assuming no image provided for new titles
            listContent: []
        },
        {
            title: "Anodising",
            image: null, // Assuming no image provided for new titles
            listContent: []
        }
    ];
    
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