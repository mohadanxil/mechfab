import style from "./style.module.scss";
import Image from '../../assets/images/ServiceIcon.png'
const Manufacturing = () => {
  return (
    <div className={style.Container}>
          <div className={style.overlay}></div>

      <div className={style.Section}>
        <div className={style.left}>
          <div className={style.title}>
            <h2>Manufacturing</h2>
          </div>
          <div className={style.description}>
          <ul>
            <li>
            Originating as a precision machine shop, Mec Fab has evolved into a comprehensive metal processing setup.
            </li>
            <li>
            Proficient in fabrication, machining, and assembly, we provide customers the flexibility to choose any or all services they require
            </li>
            <li>
            Expertise in working with materials like Alloy Steels, Stainless Steels, Aluminium, Titanium, and special steels such as S690QL and Inconel.
            </li>
            <li>
            Our skilled team offers tailored solutions to meet diverse outsourcing requirements.
            </li>

          </ul>
          </div>
        </div>
        <div className={style.right}>
        <div className={style.imageOverlay}></div>
          <div className={style.image}>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
