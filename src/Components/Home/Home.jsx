import Footer from "../../Pages/Footer";
import OurTeam from "../../Pages/OurTeam";
import Services from "../../Pages/Services";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className="mb-10">
                <OurTeam></OurTeam>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Home;