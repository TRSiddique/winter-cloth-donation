import {useContext, useState} from "react";
import { NavLink, Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
const {createNewUser, setUser,updateUserProfile}=useContext(AuthContext);
 const [error, setError]=useState({});
const navigate=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault();
    //get form data
const form= new FormData(e.target);
const name=form.get("name");
if(name.length<5){
  setError({...error, name:"must be more than 5 character"});
  return;
}
const email=form.get("email");
const photo=form.get("url");
const password=form.get("password");

//console.log({name, photo,email, password});

createNewUser(email,password)
.then(result=>{
  const user=result.user;
  setUser(user);
   updateUserProfile({displayName: name,photoURL: photo})
   .then(()=>{
    navigate('/');
   })
   .catch((e)=>{
    //console.log(e);
   })
})
.catch((e )=>{
  //console.log(e.Message);
});





  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col items-center text-center">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Registration Now</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                {
                  error.name && (
                    <label className='text-red-500'>
                      {error.name}

                    </label>
                  )
                }
                <label className="label">Photo URL</label>
                <input
                  name="url"
                  type="text"
                  className="input"
                  placeholder="Photo-url"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </form>
              <p>
                Already Have an account? <Link to="/login">login</Link>{" "}
              </p>
              <button
  onClick={() => navigate("/google-login")}
  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md border border-black rounded-4xl"
>
  Sign in with Google
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
