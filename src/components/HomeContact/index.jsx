import style from './style.module.scss';
import image from '../../assets/images/Contact.png'

const HomeContact =()=>{
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.left}>
                    <div className={style.Title}>
                        <h2>Get in Touch <span>With Us</span> </h2>
                    </div>
                    <div className={style.Description}>
                        <p>Have a query you don't have an answer to?</p>
                        <p>Let us answer it for you. We will give you the information you need.</p>
                    </div>
                    <div className={style.Image}>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className={style.right}>
                    <form action="">
                        <div className={style.inputDiv}>
                            <label htmlFor="">First Name *</label>
                            <input type="text" placeholder='First Name here'/>
                        </div>
                        <div className={style.row}>
                        <div className={style.inputDiv}>
                            <label htmlFor="">Email Address *</label>
                            <input type="text" placeholder='Add email'/>
                        </div>
                        <div className={style.inputDiv}>
                            <label htmlFor="">Subject *</label>
                            <input type="text" placeholder='How can we help you ?'/>
                        </div>

                        </div>
                        <div className={style.inputDiv}>
                            <label htmlFor="">Message *</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Add Message'></textarea>
                        </div>
                        <div className={style.ActionBtn}>
                            <input type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeContact;