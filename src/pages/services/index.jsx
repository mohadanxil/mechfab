import style from './style.module.scss';
import Banner from '../../components/banner';
// import BgImage from '../../assets/images/bgImage.png'
import Manufacturing from '../../components/manufacturing';
import ServiceCard from '../../components/cards/services';
import ServicePage from '../../components/Services'
import Materials from '../../components/materials';
import ProductsSection from '../../components/ProductsSection';
import BgImage from '../../assets/images/AboutUsBanner.png';
const Services = ()=>{
    return (
        <div className={style.Container}>
            <div className={style.Section}>
                <Banner title={"Services"} BgImage={BgImage}/>
                <Manufacturing/>
                <ServicePage/>
                <Materials/>
                <ProductsSection/>
            </div>
        </div>
    )
}

export default Services;