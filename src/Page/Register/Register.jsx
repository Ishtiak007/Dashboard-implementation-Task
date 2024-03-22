import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from '../../assets/login.jpg'


const Register = () => {
    const { createUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        const minNumberofChars = 6;
        const maxNumberofChars = 16;
        const regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (password.length < minNumberofChars || password.length > maxNumberofChars) {
            toast.error("password should contain atleast 6 character ");
            return;
        }
        else if (!regularExpression.test(password)) {
            toast.error("password should contain atleast one number,one capital letter, one small letter and one special character");
            return;
        }

        else if (!terms) {
            toast.error("Please Accept our terms and conditions");
            return;
        }

        createUser(email, password)
            .then((result) => {
                toast.success('Congratulation!!! Your Registration process Successfully done!')
                console.log(result.user);
                e.target.reset();
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card  border lg:max-w-[500px] max-w-[280px]">
                    <form onSubmit={handleRegister} className='lg:p-5 p-2'>
                        <div>
                            <p className="py-4 text-center text-xl font-semibold text-white">Register page</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-mono text-lg">Name</span>
                            </label>
                            <input type="text" name="text" placeholder="Enter Your Name" className="input input-bordered" required />
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
                        <div className='py-3'>
                            <input type="checkbox" name="terms" id="terms" />
                            <label className='ml-2' htmlFor="terms">Accept our terms and conditions</label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white  font-semibold">Register</button>
                        </div>
                        <div>
                            <p className="text-base my-3">Already have an Account? So, Please <Link to='/login' className="text-blue-600 underline">Login</Link></p>
                        </div>
                    </form>
                </div>

                <div className="mr-12 w-1/2">
                    <img className="rounded-lg shadow-2xl border-8  border-white " src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;