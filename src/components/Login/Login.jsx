import React, { useContext, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { userLogin, setUser, resetPassword } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError({});
    setSuccess("");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((e) => {
        setError({ ...error, login: e.code });
      });
  };

  const handleForgetPassword = () => {
    const email = document.querySelector("input[name='email']").value;
    if (!email) {
      setError({ ...error, reset: "Please enter your email to reset password." });
      return;
    }

    resetPassword(email)
      .then(() => {
        setSuccess("Password reset email sent! Please check your inbox.");
        setError({ ...error, reset: "" });
      })
      .catch((error) => {
        setError({ ...error, reset: error.code });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <div className="relative">
  <input
    name='password'
    type={showPassword ? "text" : "password"}
    className="input w-full pr-12" // padding right বাড়ানো হলো
    placeholder="Password"
  />
  <span
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
  </span>
</div>

              {error.login && <label className='text-red-600'>{error.login}</label>}
              {error.reset && <p className="text-red-500">{error.reset}</p>}
              {success && <p className="text-green-600">{success}</p>}

              <div>
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="link link-hover"
                >
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">Login</button>
            </form>

            <p className="mt-4">
              New in this website? <Link to='/registration' className="text-blue-600">Registration</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
