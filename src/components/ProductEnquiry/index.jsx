import React from 'react';
import style from './style.module.scss';

const ProductEnquiry = ()=>{
    return (
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Title}>
                    <h2><span>Product Information</span> Enquiry</h2>
                </div>
                <div className={style.EnquiryBtn}>
                    <button>Explore</button>
                </div>
            </div>
        </div>
    )
}

export default ProductEnquiry;