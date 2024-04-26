import style from './style.module.scss';
import shape from '../../../assets/images/Vector 2.svg'
import Shape from './shape';
const ShapeCard=()=>{
    const content = "Our mission revolves around one simple goal: growth. We aim to grow within our industry and explore new opportunities"
    return(
        <div className={style.Container}>
             
            <div className={style.Section}>
               <Shape title="What makes us Different" content={content}/>
            </div>
        </div>
    )
}

export default ShapeCard;