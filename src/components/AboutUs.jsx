import PrimaryButton from "../components/PrimaryButton";
import aboutUs1 from "../assets/images/about_us/person.jpg";
import aboutUs2 from "../assets/images/about_us/parts.jpg";

const AboutUs = () => {
    return (
        <section className="hero place-items-start mb-32">
            <div className="hero-content max-w-full flex-col gap-16 lg:flex-row">
                <div className="relative w-full hidden md:block">
                    <img src={aboutUs1} className="w-[560px] h-[460px] object-cover" />
                    <img className="absolute top-[50%] left-[50%] w-80 h-80 object-cover border-[10px] rounded border-white" src={aboutUs2} />

                </div>
                <div className="space-y-8 grow">
                    <h3 className="font-bold text-xl text-brandRed-500">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <div>

                        <p className="mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. </p>
                        <p className="">the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. </p>
                    </div>
                    <PrimaryButton btnText="Get More Info"></PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;