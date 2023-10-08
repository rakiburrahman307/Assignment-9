
// import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navLink = <>
        <li><NavLink to='/' className="font-semibold">Home</NavLink></li>
        <li><NavLink to='/about' className="font-semibold mx-3">About</NavLink></li>
        <li><NavLink to='/contact' className="font-semibold">Contact</NavLink></li>
        {/* <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>Home</NavLink></li> */}
    </>
    return (
        <div className="navbar bg-[#F8F0E5] sticky top-0 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                {navLink}
                </ul>
            </div>

            <div className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/Qvvqdt9/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
        </div>
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
      <Link to='/login'>Log In</Link>
    </button>
            </div>

        </div>
    );
};

Header.propTypes = {

};

export default Header;