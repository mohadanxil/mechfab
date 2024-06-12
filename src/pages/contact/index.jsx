import Banner from '../../components/banner';
import Contact from '../../components/contact';
import style from './style.module.scss';
import LImage from '../../assets/images/contactIcon.png'
import RImage from '../../assets/images/LeftContactBanner.png'


const ContactPage =()=>{
    return(
        <div className={style.Container}>

       
            <div className={style.Section}>
            <Banner LImage={LImage} RImage={RImage} title='Contact Us' description='Elevate your engineering solutions with MEC FAB Engineering Works Pvt. Ltd. Reach out today to discuss your project requirements, explore partnership opportunities, or delve into how we can empower your potential for growth and innovation.' type={"Description"}/>
                <Contact/>
            </div>
        </div>
    )
}

export default ContactPage;