import check from "../assets/icons/check.svg";
import delivery from "../assets/icons/delivery.svg";
import clock from "../assets/icons/clock.svg";
import group from "../assets/icons/group.svg";
import person from "../assets/icons/person.svg";
import Wrench from "../assets/icons/Wrench.svg";

const CoreFeatures = () => {
    const coreFeatures = [
        {
            icon: group,
            title: "Expert Team"
        },
        {
            icon: delivery,
            title: "Timely Delivery"
        },
        {
            icon: person,
            title: "24/7 Support"
        },
        {
            icon: Wrench,
            title: "Best Equipment"
        },
        {
            icon: check,
            title: "100% Guranty"
        },
        {
            icon: clock,
            title: "100% Guranty"
        },
        {
            icon: check,
            title: "Timely Delivery"
        },
    ]
    return (
        <section className="my-32">
            <div className="space-y-5 max-w-2xl text-center mx-auto mb-12">
                <h3 className="font-bold text-xl text-brandRed-500">Core Features</h3>
                <h1 className="text-5xl font-bold">Why Choose Us</h1>

                <p className="mb-5">The majority have suffered alteration in some form, by injected humour, or random words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-2 lg:flex gap-6">
                {
                    coreFeatures.map((feature, index) => (
                        <div key={index} className="w-full hover:bg-brandRed-500 hover:text-white rounded-xl px-5 py-8 border text-center">
                            <img className="mx-auto" src={feature.icon} alt="" />
                            <h4 className="font-bold text-lg mt-5">{feature.title}</h4>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default CoreFeatures;