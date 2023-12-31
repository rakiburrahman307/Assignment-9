import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import TostMassage from "./TostMassage";
import { AuthContext } from "../AuthProvider/Provider";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get('email');
    const password = form.get('password');

    signIn(email, password)
      .then(() => {
        TostMassage('Sign in successful');
        navigate(location?.state ? location.state : '/');
        form.reset();
      })
      .catch(() => TostMassage("Log in Failed!"));


  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        TostMassage('Sign in Successful with Google')
        navigate(location?.state ?? '/');
      })
      .catch(() => TostMassage('Sign in Successful with Google'));
  }
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/NVtWwYC/pexels-george-dolgikh-1303081.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="card flex-shrink-0 mt-10 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center mt-4">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover">Do not have an account? Register Now</Link>
          </label>
        </form>
        <div className="mb-6 mx-auto">
          <button onClick={handleSignInWithGoogle} className="btn  btn-outline btn-accent mx-auto w-48 rounded-full">Sign in With<FaGoogle className="text-xl"></FaGoogle></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
