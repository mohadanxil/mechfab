import style from './style.module.scss';
import Logo from '../../assets/images/Logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
const menu =[
    {
        id:"01",
        name:"Home",
        slug:"/"
    },
    {
        id:"02",
        name:"About",
        slug:"/about"
    },
    {
        id:"03",
        name:"Products",
        slug:"/products"
    },
    {
        id:"04",
        name:"Services",
        slug:"/services"
    },
    {
        id:"05",
        name:"Contact",
        slug:"/contact"
    },
    
]
const Header =()=>{
    const location = useLocation()
    const navigate = useNavigate();
    const [color,setColor] = useState("")
    useEffect(()=>{
        if(location.pathname.includes("product-description")){
            setColor("#1A2350")
        }
        else{
            setColor("")
        }
    },[location])
    const [HamBurger,setHamBurger] = useState(false);
    return(
        <div className={style.Container}>
        {HamBurger?
        <div className={style.HamburgerMenu}>
            <IoClose onClick={()=>{
                setHamBurger(HamBurger?false:true)
            }}/>
            <div className={style.Menu}>
                    <ul>
                    {menu?.map((nav)=>{
                        return(
                        <li style={{color:color?"#fff":color}} key={nav.id} onClick={()=>{
                            navigate(nav.slug)
                            setHamBurger(false)
                        }}>{nav.name}</li>

                        )
                    })}
                        
                    </ul>
                </div>
        </div>
        :null}
            <div className={style.Section} style={{backgroundColor:color?color:"#fff"}}>
                <div className={style.Logo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={style.HamBurger} onClick={()=>{
                    setHamBurger(HamBurger?false:true)
                }}>
                <IoMenu />
                </div>
                <div className={style.Menu}>
                    <ul>
                    {menu?.map((nav)=>{
                        return(
                        <li style={{color:color?"#fff":color}} key={nav.id} onClick={()=>{
                            navigate(nav.slug)
                        }}>{nav.name}</li>

                        )
                    })}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;