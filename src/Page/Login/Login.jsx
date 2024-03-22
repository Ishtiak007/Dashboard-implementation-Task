import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import googleLogo from '../../assets/googleLogo.png'
import toast from "react-hot-toast";
import img from '../../assets/login.jpg'

const Login = () => {
    const { signIn, googleSignIn } = useAuth();
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                toast.success('Your Login process Successfully done!');
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error("Invalid login credentials , Provide your valid email and password")
                console.log(error)
            })
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then((res) => {
                toast.success('Google Log In successfully!');
                console.log(res.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error("Invalid login credentials")
                console.log(error)
            })
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:mr-12 lg:w-1/2">
                    <img className="rounded-lg shadow-2xl border-8  border-white " src={img} alt="" />
                </div>
                <div className="card border lg:max-w-[500px] max-w-[280px]">
                    <form onSubmit={handleLogin} className='lg:p-5 p-2'>
                        <div>
                            <p className="py-4 text-center text-xl font-semibold text-white-900">Login Here</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered" required />
                            <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white  font-semibold">Login</button>
                        </div>
                        <div>
                            <hr className="my-4" />
                            <h1 className="text-xl font-bold text-center mt-4">You can also Login With</h1>
                            <div className="space-y-3 my-4">
                                <button onClick={handleGoogleLogIn} className="flex items-center gap-3 w-full justify-center rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><img src={googleLogo} className="w-6" alt="" /> Continue With Google</button>
                            </div>
                        </div>
                        <div>
                            <p className="text-base my-3">Have nt Any an Account? So, Please <Link to='/register' className="text-blue-600 underline">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;