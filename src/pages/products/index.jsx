import ShapeCard from '../../components/cards/shapeCard';
import style from './style.module.scss';
import Banner from '../../components/banner'
import LImage from '../../assets/images/ProductsBanner.png'
import RImage from '../../assets/images/ProductsBannerRight.png'
import ProductCard from '../../components/cards/productCard';
import productsSample from '../../assets/images/productsSample.png'
import ProductList from './productList';
import MainProducts from '../../components/MainProducts';
const Products = ()=>{
    const productData = [
        {
            title:"Fabrication and Machining",
            data:[
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                }
            ]
        },
        {
            title:"Assemblies",
            data:[
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                }
            ]
        },
        {
            title:"Fabrication and Machining",
            data:[
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                }
            ]
        },
        {
            title:"Fabrication and Machining2",
            data:[
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                }
            ]
        },
        {
            title:"Fabrication and Machining3",
            data:[
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                },
                {
                    image:productsSample,
                    content:"Lorem Ipsum"
                }
            ]
        }
    ]
    return(
        <div className={style.Container}>
            <Banner title="Products" LImage={LImage} RImage={RImage}/>
            <div className={style.Section}>
            {productData?.map((item,index)=>{
                if(index<3){
                return(
            <ProductList title={item.title} data={item?.data}/>
                )
                }
            })}
            <MainProducts/>
            {productData?.map((item,index)=>{
                if(index>2){
                return(
            <ProductList title={item.title} data={item?.data}/>
                )
                }
            })}
           

            {/* <ShapeCard/> */}
            {/* <div className={style.Tagline}>
                <p>Product Details</p>
            </div>
            <div className={style.Title}>
                <h2>Our Products</h2>
            </div>
            <div className={style.Description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam. Consequuntur ex voluptates perferendis distinctio facere iste earum repellat temporibus minus. Repudiandae, modi illum esse id consequatur laborum cum accusamus asperiores minima repellendus nisi enim, ullam nihil ipsam itaque. Impedit sit fugit rem nulla. Voluptatibus sequi dolore, deleniti ipsa atque eum voluptatum impedit.</p>
            </div>
            <div className={style.Products}>
                {productsArray.map((item)=>{
                    return(
                        <ProductCard title={item.title} icon={item.icon} />
                    )
                })}
            </div> */}
            </div>
        </div>
    )   
}

export default Products;