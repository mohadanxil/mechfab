import style from './style.module.scss';
import Banner from '../../components/banner';
// import BgImage from '../../assets/images/bgImage.png'
import Manufacturing from '../../components/manufacturing';
import ServiceCard from '../../components/cards/services';
import ServicePage from '../../components/Services'
import Materials from '../../components/materials';
import ProductsSection from '../../components/ProductsSection';
import BgImage from '../../assets/images/AboutUsBanner.png';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
const Services = ()=>{
    const location = useLocation();
    const service1Ref = useRef(null);
    const service2Ref = useRef(null);
    const service3Ref = useRef(null);
  
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const scrollTo = params.get('service');
      console.log(scrollTo)
      
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
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