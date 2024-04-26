import style from './style.module.scss';

const Copyright = ()=>{
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Copyright}>
                    <p>2024 Mech Fab Engineering. All Rights Reserved.</p>
                </div>
            </div>
        </div>
        
    )
}

export default Copyright;