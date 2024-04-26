import CompanyCard from '../cards/Company';
import style from './style.module.scss';
import image from '../../assets/images/nutlBolt.jpg'
import Company1 from '../../assets/images/Companies01.png';
import Company2 from '../../assets/images/Companies02.png';
import Company3 from '../../assets/images/Companies03.png';
import Company4 from '../../assets/images/Companies04.png';

const GroupCompanies = ()=>{
    const listData =[
        {
            title:"MEC FAB ENGINEERING WORKS",
            image:Company1,
            listData:[
                {
            title:"Area",
            content:"6,000 sq. ft.",
        },
        {
            title:"Specialties",
            content:"Assembly, Fabrication, and Machining",
          
        },
        {
            title:"Capacity",
            content:"10 MT",
        },
        {
            title:"Employees",
            content:"35",
        },
            ]
        },
        // {
        //     title:"Specialties",
        //     content:"Assembly, Fabrication, and Machining",
        //     image:Company2
        // },
        // {
        //     title:"Capacity",
        //     content:"10 MT",
        //     image:Company3
        // },
        // {
        //     title:"Employees",
        //     content:"35",
        //     image:Company4
        // },
        {
            title:"MASTER ENGINEERS",
            image:Company2,
            listData:[
                {
            title:"Area",
            content:"12,000 sq. ft.",
        },
        {
            title:"Specialties",
            content:"Fabrication, Machining",
          
        },
        {
            title:"Capacity",
            content:"10 MT",
        },
        {
            title:"Employees",
            content:"15",
        },
            ]
        },
        {
            title:"SUCHIRA ELECTROPLATER",
            image:Company3,
            listData:[
                {
            title:"Area",
            content:"6,000 sq. ft.",
        },
        {
            title:"Specialties",
            content:"Electroplating",
          
        },
        {
            title:"Capacity",
            content:"5MT/day",
        },
        {
            title:"Employees",
            content:"35",
        },
            ]
        },
        {
            title:"",
            image:Company1,
            listData:[]
        },

    ]
    return(
        <div className={style.Container}>
            <div className={style.Section}>
                <div className={style.Title}>
                    <h2>Group <span>Companies</span></h2>
                </div>
                <div className={style.Cards}>
                    {listData.map((item)=>{
                        return(
                            <CompanyCard title={item.title} listData={item.listData} image={item.image}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GroupCompanies