import AboutTop from '../../components/AboutTop';
import Legacy from '../../components/Legacy';
import LegacyPara from '../../components/LegacyPara';
import ProductEnquiry from '../../components/ProductEnquiry';
import Banner from '../../components/banner';
import style from './style.module.scss';
import BgImage from '../../assets/images/AboutUsBanner.png'
import WhyChooseUs from '../../components/WhyChooseUs';
const AboutUs = ()=>{
    return (
        <div className={style.Contanier}>
            <div className={style.Section}>
            <Banner title='About Us' BgImage={BgImage}/>
                <AboutTop/>
                <WhyChooseUs/>
                <ProductEnquiry/>
            </div>
        </div>
    )
}

export default AboutUs;