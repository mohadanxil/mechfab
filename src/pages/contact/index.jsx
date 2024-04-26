import Banner from '../../components/banner';
import Contact from '../../components/contact';
import style from './style.module.scss';
import LImage from '../../assets/images/contactIcon.png'
import RImage from '../../assets/images/LeftContactBanner.png'


const ContactPage =()=>{
    return(
        <div className={style.Container}>

       
            <div className={style.Section}>
            <Banner LImage={LImage} RImage={RImage} title='Contact Us' description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam corporis rem ipsam, nobis, asperiores maxime iure similique non temporibus est accusantium quia.' type={"Description"}/>
                <Contact/>
            </div>
        </div>
    )
}

export default ContactPage;