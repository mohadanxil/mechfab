import TestimonialCard from '../cards/testimonial';
import style from './style.module.scss';

const Testimonials = ()=>{
    return (
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Title}>
                    <h1>What They're <br></br>Talking About<span>Company ?</span></h1>
                </div>
                <div className={style.Cards}>
                {new Array(2).fill(0).map((item)=>{
                    return(
                        <TestimonialCard content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nesciunt illum accusamus vel voluptates ex,"} stars={4}/>
                    )
                })}
                  
                </div>
            </div>
        </div>
    )
}

export default Testimonials;