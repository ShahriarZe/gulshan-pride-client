import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import regiBG from '../../assets/regiBG.png'
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {

    const axiosPublic = useAxiosPublic()

    const bgStyle = {
        backgroundImage: `url(${regiBG})`,
    }

    const { createUser, googleSignIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value
        const user = { email, password, name, image }
        console.log(user)
        if (password.length < 6) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must be 6 Characters Long!',
            })
        }
        else if (!/[A-Z]/.test(password)) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Conatain 1 Uppercase Letter!',
            })
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Conatain 1 Special Character!',
            })
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image
                })
                const userInfo = {
                    name: name,
                    email: email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate(location?.state ? location?.state : "/")
                            e.target.reset()
                            Swal.fire({
                                icon: 'success',
                                title: 'Congratulations...',
                                text: 'Registration Successfull',
                            })
                        }
                    })

            })
            .catch(err => {
                console.log(err)
                e.target.reset()
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User Already Exist',
                })
            })
    }

    const handleGoogleButton = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate(location?.state ? location?.state : "/")
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations...',
                    text: 'Login Successfull',
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen max-w-7xl mx-auto bg-cover" style={bgStyle}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Welcome To <span className='text-red-700 font-extrabold'>G</span>ulshan<span className='text-red-700 font-extrabold'>P</span>ride!</h1>
                        <p className="py-6">Securely access your personalized space with our streamlined login page. Your journey into seamless building management begins here.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl border border-red-700">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Your Image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline text-red-700" type="submit" value="Register" />
                            </div>
                        </form>
                        <label className="label px-4">
                            Have an Account? <Link to="/login" className="label-text-alt link link-hover">Login Here</Link>
                        </label>
                        <div className="divider">continue with</div>
                        <div className="flex justify-center">
                            <div className="mb-5">
                                <button onClick={handleGoogleButton} className=" btn btn-outline text-red-700  ">
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

export default Register;