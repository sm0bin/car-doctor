import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import PrimaryButton from "../PrimaryButton";
import { BiLogoGoogle, BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi';

const SignUp = () => {

    const handleSubmit = e => {
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


    }
    return (
        <div className="hero">
            <div className="hero-content w-full  flex-col lg:flex-row">
                <figure className="w-full">
                    <img className="" src={img} alt="" />
                </figure>
                <div className="card w-full max-w-md p-8 border">
                    <h2 className="text-4xl font-bold text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <PrimaryButton btnText="Sign Up"></PrimaryButton>
                        </div>
                    </form>
                    <h3 className="text-lg font-medium text-center mt-5">Or Sign Up with</h3>
                    <div className="flex justify-between mt-5">
                        <button className="btn normal-case text-base">
                            <BiLogoGoogle />
                            Google
                        </button>
                        <button className="btn normal-case text-base">
                            <BiLogoFacebook />
                            Facebook
                        </button>
                        <button className="btn normal-case text-base">
                            <BiLogoLinkedin />
                            LinkedIn
                        </button>
                    </div>
                    <h3 className="font-medium mt-5">Already have an account? <Link className="link link-hover text-brandRed-500" to="/login">Login</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default SignUp;