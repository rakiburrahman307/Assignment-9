
// import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Provider';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLink = <>
    <li><NavLink to='/' className="font-bold">Home</NavLink></li>
    <li><NavLink to='/about' className="font-bold mx-3">About</NavLink></li>
    <li><NavLink to='/contact' className="font-bold mr-3">Contact</NavLink></li>
    {user ? (
      <>
        <li><NavLink to='/dashboard' className="font-bold mr-3">Dashboard</NavLink></li>
        <li><NavLink to='/profile' className="font-bold mr-3">Profile</NavLink></li>
      </>
    ) : null}



  </>
  return (
    <div className="navbar bg-[#F8F0E5] sticky py-4 top-0 z-10 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>                    </label>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Health Faire</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <ToastContainer />
      <div className="navbar-end">

        {user ? (
          <div className='flex justify-center items-center'>
            <h2 className="text-xl text-block mr-2 font-semibold">{user.displayName}</h2>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
              <div className="w-10 rounded-full">
              <img
                            className="mx-auto rounded-full"
                            src={user.photoURL ? user.photoURL : "https://i.ibb.co/Qvvqdt9/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
                            alt="User Avatar"
                        />
              </div>
            </label>
            <button onClick={logOut} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded-se-3xl rounded-r-3xl">
              <Link to='/login'>Log Out</Link>
            </button>
          </div>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-se-3xl">
            <Link to='/login'>Log In</Link>
          </button>
        )}

      </div>

    </div>
  );
};

Header.propTypes = {

};

export default Header;