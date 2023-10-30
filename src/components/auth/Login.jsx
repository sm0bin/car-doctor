import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import PrimaryButton from "../PrimaryButton";
import { BiLogoGoogle, BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import person from "../../assets/icons/person.svg"
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
    const { loginUser, googleSignIn, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setSignUpError("");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful.');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }
    return (
        <div className="hero">
            <Toaster />
            <div className="hero-content w-full  flex-col lg:flex-row">
                <figure className="w-full">
                    <img className="" src={img} alt="" />
                </figure>
                <div className="card w-full max-w-md p-8 border">
                    <h2 className="text-4xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit} className="card-body p-0">
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
                        {
                            signUpError && <p className='mt-4 font-medium text-rose-500'>{signUpError}</p>
                        }
                        <div className="form-control mt-6">
                            <PrimaryButton btnText="Login"></PrimaryButton>
                        </div>
                    </form>
                    <h3 className="text-lg font-medium text-center mt-5">Or Sign In with</h3>
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
                    <h3 className="font-medium mt-5">Don&apos;t have an account? <Link className="link link-hover text-brandRed-500" to="/sign-up">Sign Up</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Login;