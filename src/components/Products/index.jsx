import ProductsCard from '../cards/product/products';
import style from './style.module.scss';
import PrecsionIcon from '../../assets/images/precisionLogo.png';
import purposeMachine from '../../assets/images/puporseLogo.png';
import Fabrication from '../../assets/images/fabricationLogo.png';


const ProductsSection = ()=>{
    const ProductsData=[
        {
            id:"01",
            bold:"Precision",
            title:"Machining",
            Image:PrecsionIcon
        },
        {
            id:"02",
            bold:"Specila Purpose",
            title:"Machine",
            Image:purposeMachine
        },
        {
            id:"03",
            bold:"Fabrication",
            title:"",
            Image:Fabrication
        }
    ]
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                {ProductsData.map((item)=>{
                    return(
                        <ProductsCard key={item.id} title={item.title} bold={item.bold} Image={item.Image}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsSection;