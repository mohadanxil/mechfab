import style from './style.module.scss';


const Contact =()=>{
    return(
        <div className={style.Container}>
        {/* <div className={style.Overlay}>
            
            </div> */}
            <div className={style.Section}>
                <div className={style.left}>
                    <div className={style.Title}>
                        <h2><span>Product Enquiry</span> Form</h2>
                    </div>
                    <div className={style.Description}>
                        <p>Our Team is happy to answer your questions.</p>
                        <p>Fill out this form and we'll be in touch with you as soon as possible.</p>
                    </div>
                </div>
                <div className={style.right}>
                    <form action="">
                        <div className={style.inputDiv}>
                            <label htmlFor="">Name*</label>
                            <input type="text" placeholder='First Name here'/>
                        </div>
                        <div className={style.row}>
                        <div className={style.inputDiv}>
                            <label htmlFor="">Email Address*</label>
                            <input type="text" placeholder='Email Address'/>
                        </div>
                        <div className={style.inputDiv}>
                            <label htmlFor="">Phone</label>
                            <input type="text" placeholder='XXX XXX XXXX'/>
                        </div>

                        </div>
                        <div className={style.inputDiv}>
                            <label htmlFor="">Enquiry*</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='What would you...'></textarea>
                        </div>
                        <div className={style.ActionBtn}>
                            <input type="submit" value="SUBMIT" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;