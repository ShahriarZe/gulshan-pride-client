import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    
    return (
        <div>
            <div className="hero min-h-screen max-w-7xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <input className="btn btn-outline text-red-700" type="submit" value="Login" />
                            </div>
                        </form>
                        <label className="label px-4">
                        New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                    </label>
                    <div className="divider">continue with</div>
                    <div className="flex justify-center">
                    <div className="mb-5">
                        <button className=" btn btn-outline  text-red-700">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;