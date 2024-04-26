import ProductContents from '../../components/ProductContents';
import ProductService from '../../components/ProductService';
import Banner from '../../components/banner';
import ProductDetail from '../../components/cards/ProductDetail';
import style from './style.module.scss';
import ProductImage from '../../assets/images/productDescriptionImage.png'

const ProductSection = ()=>{
    const data = {
        title:"Fabrication and Machining",
        description:`Dexterity of our professionals in this domain allows us to undertake Mec feb Engineering
        Works Fabrication Services. We make sure that the components are manufactured as per
        the specifications detailed by our clients. Components supplied by us are durable,
        dimensionally accurate and are offered at industry leading prices.`,
        content:[
            {
                head:``,
                data:`We have qualified welders and offer fabrication
                solutions for the following materials.`,
                type:"paragraph",
            },
            {
                head:`Structural Material`,
                data:`IS2062 Grade A, IS2062 Grade B, SA516 Grade 70`,
                type:"",
            },
            {
                head:`Stainless Steel`,
                data:`SS304, SS316`,
                type:"",
            },
            {
                head:`Alloy Steels`,
                data:`EN8/BS970:080M40, EN19/BS970:709M40, EN24/BS970`,
                type:"",
            },
            {
                head:`Exquisite Material`,
                data:`SAILMA 350 HI, SAILMA 450 HI`,
                type:"",
            },
            {
                head:`Fabrication of different materials`,
                data:`EN8 to S690QL`,
                type:"",
            },
            {
                head:`We can also develop fabrications skills for additional
                materials as per customer requirements.`,
                data:``,
                type:"",
            },
            {
                head:`FABRICATION CUSTOMERS.`,
                data:[
                    {
                        data: ` Larsen & Toubro Limited (Heavy Engineering Division)`
                    },
                    {
                        data: `TATA Special Steels Steel`
                    },
                    {
                        data: `Kabra Extrusion Technik Limited`
                    },
                    {
                        data: `J P Extrusion Tech Limited`
                    },
                    {
                        data: ` Matrecons Enterprises`
                    },
                    {
                        data: ` Technocorp (I) Pvt Ltd`
                    },
                ],
                type:"list",
            },
        ],
        image:ProductImage,
        contentLeft:`Our organization is engaged in offering different
        types of Fabrication Services to our clients. We have
        all kinds of facilities, which help us in rendering these
        services. Our organization is capable of executing
        these services for hi-tech machinery. Moreover,
        we are able to complete these services,
        within the committed time-frame.`,
        contentRight:`MEC FAB ENGINEERING WORKS offers services in
        fabrication of structures, machine beds, assemblies
        etc. Coupled with our precision machine shop,
        we also undertake machining of the fabrications
        and offer total solution to the customer.`
    }
    const {title,content,description,image="",contentLeft,contentRight,...rest} = data
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                {/* <Banner title="Precision Machining" />
                <ProductDetail/>
                <ProductService/>
                <ProductContents/> */}
                <div className={style.Title}>
                    <h1>{title}</h1>
                </div>
                <div className={style.Content}>
                    <p>{description}</p>
                </div>
                <div className={style.Divider}></div>
                <div className={style.Title}>
                    <h1>OUR PRODUCT LIST</h1>
                </div>
                <div className={style.ProductListImage}>
                    <img src={image} alt="" />
                </div>
                <div className={style.ProductLeftContent}>
                <div className={style.ProductSectionBg}>
                    <div className={style.Left}>
                        <p>{contentLeft}</p>
                    </div>
                    <div className={style.Right}>
                        <p>{contentRight}</p>
                    </div>
                </div>
                </div>
                <div className={style.ContentStyle}>
                {content?.map((body)=>{
                    return(
                    <div className={style.ContentRow}>
                        {body?.head&&
                            <h1 className={style.ContentRowHead}>
                                {body?.head}
                            </h1>
                        }
                        {body?.data?body?.type==="list"?
                        <ol>
                            {body?.data.map((bodyData)=>{
                                return(
                            <li>{bodyData?.data}</li>
                                )
                            })}
                        </ol>
                        :
                        body.type==="paragraph"?
                        <p>{body?.data}</p>
                        :
                        <ul>
                            <li>{body?.data}</li>
                        </ul>:""
                        }

                    </div>
                    )
                })}
                </div>

            </div>
        </div>
    )
}

export default ProductSection;