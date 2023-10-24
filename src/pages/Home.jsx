import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";

const Home = () => {
    return (
        <>
            <div className="mx-4 md:mx-8 lg:mx-36">
                <Header></Header>
                <Hero></Hero>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;