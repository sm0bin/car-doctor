import Swal from "sweetalert2";
import banner from "../assets/images/checkout/checkout.png"
import PrimaryButton from "./PrimaryButton";

const CheckOut = () => {

    const handleSubmit = e => {
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const checkoutInfo = { firstName, lastName, phone, email, message };

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(checkoutInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    Swal.fire(
                        'Success!',
                        'Purchased Successfully!',
                        'success'
                    )
                }
            })
    }
    return (
        <section>
            <div className="hero rounded-xl place-items-start relative mb-32" style={{ backgroundImage: `url(${banner})` }}>
                <div className="h-full rounded-xl w-4/5 justify-self-start bg-gradient-to-r from-black to-black/0"></div>
                <h1 className="px-24 py-32 text-5xl font-bold text-white">Check Out</h1>
                <div className="absolute bg-brandRed-500 text-white text-center py-3 px-16 bottom-0 inset-x-[42%] ">
                    <h4>Home/Checkout</h4>
                </div>
            </div>

            <div className="hero p-24 bg-base-200 rounded-xl">
                <div className="hero-content max-w-full w-full flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full">
                        <form onSubmit={handleSubmit} className="card-body w-full">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="form-control">
                                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control col-span-2">
                                    <textarea name="massage" placeholder="Your Message" id="" cols="30" rows="10" className="input input-bordered p-4 h-auto" required></textarea>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <PrimaryButton btnText="Order Confirm"></PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CheckOut;