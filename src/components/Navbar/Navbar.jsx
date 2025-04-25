import {useContext} from 'react';
import logo from './../../assets/logo.png'
import {NavLink, Link} from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import icon from '/public/man.png'

const Navbar = () => {
const {user,logOut}=useContext(AuthContext);


const Links=<>
<li><Link to='/'>Home</Link></li>
<li><Link to='/campaigns'>Donation Campaigns</Link></li>
<li><Link to='/help'> How to Help</Link></li>
<li><Link to='/dashboard'> Dashboard</Link></li>
</>

    return (
       <div className='bg-white text-black'>
         <div className="navbar shadow-sm justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
   
    <a href="/"><img src={logo} className='w-[40px] ' alt="" /></a>
    <a className="btn btn-ghost text-xl">WinterWarmth</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
 <div className=' flex gap-3 items-center justify-end'>
 <div>
    {
      user && user?.email ? <div className='flex flex-col items-center'><img className='w-8 h-8 rounded-full' src={user?.photoURL}alt="" /><p>{user.displayName}</p></div>: <img src={icon} alt="" />
    }
   
  </div>
  <div className="navbar-end">
    <p>{user && user.name}</p>
    {
      user && user?.email? <button onClick={logOut} className="btn">LogOut</button>:<Link to='login' className="btn">Login</Link>
    }
    
  </div>
 </div>
</div>
       </div>
    );
};

export default Navbar;