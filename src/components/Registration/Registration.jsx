import { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("url");
    const password = form.get("password");

    const newError = {};

    // Name validation
    if (name.length < 5) {
      newError.name = "Name must be more than 5 characters.";
    }

    // Password validation
    if (!/[A-Z]/.test(password)) {
      newError.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      newError.password = "Password must contain at least one lowercase letter.";
    } else if (password.length < 6) {
      newError.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    // If valid, proceed
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col items-center text-center">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold">Registration Now</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input name="name" type="text" className="input" placeholder="Name" />
              {error.name && <label className="text-red-500">{error.name}</label>}

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input name="url" type="text" className="input" placeholder="Photo-url" />

              {/* Email */}
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />

              {/* Password */}
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              {error.password && <label className="text-red-500">{error.password}</label>}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>

            <p>
              Already Have an account? <Link to="/login">Login</Link>
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
  );
};

export default Registration;
