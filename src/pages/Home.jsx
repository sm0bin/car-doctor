import Hero from "../components/Hero/Hero";
import CoreFeatures from "../components/CoreFeatures";
import Infos from "../components/Infos";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";

const Home = () => {
    return (
        <>

            <Hero></Hero>
            <AboutUs></AboutUs>
            <Services></Services>
            <Infos></Infos>
            <CoreFeatures></CoreFeatures>

        </>
    );
};

export default Home;