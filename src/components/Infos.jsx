import calender from "../assets/info-icons/calender.svg";
import call from "../assets/info-icons/call.svg";
import map from "../assets/info-icons/map.svg";


const Infos = () => {
    const infos = [
        {
            question: "We are open (Monday-Friday)",
            answer: "7:00 am - 9:00 pm",
            icon: calender
        },
        {
            question: "Have a question?",
            answer: "+2546 251 2658",
            icon: call
        },
        {
            question: "Need a repair? Our address",
            answer: "Liza Street, New York",
            icon: map
        },
    ]
    return (
        <section className="bg-brandBlack my-32 rounded-xl text-white flex gap-16 px-24 py-24 overflow-x-auto justify-between">
            {
                infos.map((info, index) => (
                    <div className="flex gap-6 min-w-max" key={index}>
                        <img className="w-16" src={info.icon} alt="" />
                        <div>
                            <h5 className="font-medium mb-2.5 text-lg">{info.question}</h5>
                            <h3 className="font-bold text-4xl">{info.answer}</h3>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default Infos;