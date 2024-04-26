import Dimension from "../../components/Dimensions";
import HomeBanner from "../../components/HomeBanner";
import HomeContact from "../../components/HomeContact";
import HomeLegacy from "../../components/HomeLegacy";
import MissionVission from "../../components/MissionVission";
import ProductsSection from "../../components/Products";
import Banner from "../../components/banner";
import GroupCompanies from "../../components/companies";
import GroupCompanies2 from "../../components/GroupCompanies";

import Testimonials from "../../components/testimonials";

const Home=()=>{
    return(
        <div className="">
            <HomeBanner/>
            <ProductsSection/>
            <HomeLegacy/>
            <MissionVission/>
            <Dimension/>
            <GroupCompanies2/>
            <GroupCompanies/>
            <Testimonials/>
            <HomeContact/>
        </div>
    )
}

export default Home;