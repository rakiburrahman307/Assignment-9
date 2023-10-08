import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/NVtWwYC/pexels-george-dolgikh-1303081.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center mt-4">Registration now!</h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" required />
                </div>
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
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <label className="label">
                    <Link to="/login" className="label-text-alt link link-hover">Already have an account? Login Now</Link>
                </label>
            </form>
        </div>

    </div>
    );
};

export default Registration;