import React from 'react';
import {NavLink, Link} from 'react-router-dom'


const Registration = () => {
    return (
        <div>
             <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col items-center text-center">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold">Registration Now</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
        <p>Already Have an account? <Link to='/login'>login</Link> </p>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Sign in with Google</button>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Registration;