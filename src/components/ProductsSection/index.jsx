import style from "./style.module.scss";
import image from "../../assets/images/ElectronicBanner.png"
import image2 from '../../assets/images/ManufacturingBanner.png'

const ProductsSection = () => {
  return (
    <div className={style.Container}>
    <div className={style.Triangle}></div>
      <div className={style.Section}>
        <div className={style.Services}>
          <div className={style.Service}>
            <div className={style.Left}>
              <div className={style.Title}>
                <h3>
                  <span>Electroplating </span>Capacity
                </h3>
              </div>
              <div className={style.Description}>
                <p>
                Our advanced facilities include modular facility for every plating, i.e. sizes of tanks employed vary as per the component size and configuration.
<br></br>Maximum tank size available is 6m x 4m x 1.5m.
Our maximum component capacity by weight is an impressive 5MT.<br></br>
We have in-house calibrated furnaces for HERT (Hydrogen De-embrittlement) with attached recorders.
<br></br>Including ZnNi Plating Tanks, Acid Zinc Plating Tanks, Cyanide Zinc Plating Tanks, Acid Tin Plating Tanks, Acid Copper Plating Tanks, Chromatization Tanks, Electropolishing Tanks, Bright Nickel Plating Tanks, Dull Nickel Plating Tanks, Cadmium Plating Tanks, Nickel Strike Tanks, Copper Plating Tanks, Zinc Phosphating Tanks, and Manganese Phosphating Tanks. Our maximum component capacity is an impressive 5MT / 6m x 4m x 1.5m.
                </p>
              </div>
            </div>
            <div className={style.Right}>
              <img src={image} alt="" />
            </div>
          </div>
          <div className={style.Service}>
            <div className={style.Right}>
              <img src={image2} alt="" />
            </div>
            <div className={style.Left}>
              <div className={style.Title}>
                <h2>
                  <span>Contract Manufacturing:</span>Engineering the Future
                </h2>
              </div>
              <div className={style.Description}>
                <ul>
                  <li>
                  Specializing in defense products, as well as providing contract manufacturing services for phones, laptops, and cars.
                  </li>
                  <li>
                  Our global and national clientele includes renowned organizations like Larsen & Turbo, Bharat Electronics Ltd., Kabra ExtrusionTechnik Ltd, J.P Extrusion, Hind Rectifiers, Godrej & Boyce Manufacturing Company Ltd., Walchandnagar Industries Ltd,and Nuclear Power Corporation of India Ltd. (NPCIL)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
