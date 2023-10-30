import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log(services);
    return (
        <section className="my-32">
            <div className="space-y-5 max-w-2xl text-center mx-auto mb-12">
                <h3 className="font-bold text-xl text-brandRed-500">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>

                <p className="mb-5">The majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services?.map((service, index) => (
                        <div key={index} className="w-full hover:bg-brandRed-500/5 rounded-xl p-6 border">
                            <img className="w-full rounded-lg h-40 md:h-40 lg:h-80 object-cover" src={service.img} alt="" />
                            <h4 className="font-bold text-2xl mt-5">{service.title}</h4>
                            <div className="flex justify-between items-center">
                                <h4 className="text-brandRed-500 font-semibold text-lg mt-3">Price : ${service.price}</h4>
                                <button className="btn btn-ghost btn-circle text-brandRed-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default Services;