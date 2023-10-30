import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import PrimaryButton from "../PrimaryButton";
import { BiLogoGoogle, BiLogoGithub, BiLogoFacebook } from 'react-icons/bi';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import person from "../../assets/icons/person.svg"
import { Toaster, toast } from "react-hot-toast";

const SignUp = () => {
    const { signUpUser, googleSignIn, githubSignIn, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setSignUpError("");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setSignUpError('Password must be at least 6 characters long.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setSignUpError('Password must contain at least one lowercase letter.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Password must contain at least one uppercase letter.');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setSignUpError('Password must contain at least one number.');
            return;
        }
        else if (!/[!@#$%^&*()+=]/.test(password)) {
            setSignUpError('Password must contain at least one special character.');
            return;
        }

        signUpUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name, person)
                    .then(result => {
                        console.log(result);
                        toast.success('User created successfully.')
                    })
                    .catch(error => {
                        console.error(error);
                        toast.error(error.message);
                    })
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful.');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
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
                        {
                            signUpError && <p className='mt-4 font-medium text-rose-500'>{signUpError}</p>
                        }
                        <div className="form-control mt-6">
                            <PrimaryButton btnText="Sign Up"></PrimaryButton>
                        </div>
                    </form>
                    <h3 className="text-lg font-medium text-center mt-5">Or Sign Up with</h3>
                    <div className="flex justify-between mt-5">
                        <button onClick={handleGoogleSignIn} className="btn normal-case text-base">
                            <BiLogoGoogle />
                            Google
                        </button>
                        <button className="btn normal-case text-base">
                            <BiLogoFacebook />
                            Facebook
                        </button>
                        <button onClick={handleGithubSignIn} className="btn normal-case text-base">
                            <BiLogoGithub />
                            GitHub
                        </button>
                    </div>
                    <h3 className="font-medium mt-5">Already have an account? <Link className="link link-hover text-brandRed-500" to="/login">Login</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default SignUp;