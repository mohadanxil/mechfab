import style from "./style.module.scss";
import Logo from '../../assets/images/Logo.png';
const HomeBanner = () => {
  return (
    <div className={style.Container}>
      <div className={style.Section}>
        <div className={style.Top}>
          <div className={style.Logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={style.Left}>
            <div className={style.Title}>
                <h1>ETALLIC</h1>
            </div>
            <div className={style.Tagline}>
                <p>MARVELS UNVEILED</p>
            </div>
          </div>
        </div>
          <div className={style.Description}>
            <p>Explore the future of innovation and craftsmanship!</p>
          </div>
          <div className={style.Button}>
            <button>Explore Products</button>
          </div>
      </div>
    </div>
  );
};

export default HomeBanner;
