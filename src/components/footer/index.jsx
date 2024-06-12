import style from './style.module.scss';
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom';
const Footer=()=>{
    return(
        <div className={style.Container}>
        <div className={style.Overlay}></div>
            <div className={style.Section}>
                <div className={style.FirstContent}>
                <div className={style.Logo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={style.Title}>
                    <h2>MEC FAB</h2>
                </div>
                <div className={style.Head}>
                    <h4>ENGINEERING<br></br><span>WORKS PVT LTD</span></h4>
                </div>
                <div className={style.Tagline}>
                    <p>Innovation. Precision. Perfection</p>
                </div>
                </div>
                <div className={style.Address}>
                    <div className={style.Row}>
                        <div className={style.Icon}>
                        <FaMapMarkerAlt />
                        </div>
                        <div className={style.Content}>
                            <p>Unit - I. R-403, Rabale M.I.D.C.
T.T.C. Industrial Area, Navi Mumbai
400701 Maharashtra, India.</p>
                        </div>
                    </div>
                    <div className={style.Row}>
                        <div className={style.Icon}>
                        <FaMapMarkerAlt />
                        </div>
                        <div className={style.Content}>
                            <p>Unit - Il, A-584, Mahape M.I.D.C.
T.T.C. Industrial Area, Navi Mumbai
400701 Maharashtra, India.</p>
                        </div>
                    </div>
                    <div className={style.Row}>
                        <div className={style.Icon}>
                        <FaPhone />
                        </div>
                        <div className={style.Content}>
                            <p>+91 9833042091</p>
                        </div>
                    </div>
                    <div className={style.Row}>
                        <div className={style.Icon}>
                        <BsEnvelopeFill />
                        </div>
                        <div className={style.Content}>
                            <p>ashish.seth@mecfabengg.com</p>
                        </div>
                    </div>
                </div>
                <div className={style.QuickLinks}>
                <div className={style.Title}>
                    <h2>Quick Links</h2>
                </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About US</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className={style.Community}>
                <div className={style.Title}>
                    <h2>Community</h2>
                </div>
                    <ul>
                        <li>Help Center</li>
                        <li>Partners</li>
                        <li>Suggestions</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
