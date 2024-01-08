import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div className="fixed flex justify-center items-center min-h-screen min-w-full bg-base-200">
      <div className="relative w-[95%] sm:w-[400px] min-w-80">
        <div className="absolute -top-16 -left-16 size-60 rounded-full filter blur-2xl animate-blob animation-delay-2000 bg-emerald-400 opacity-70"></div>
        <div className="absolute -bottom-16 -right-16 size-60 rounded-full filter blur-2xl animate-blob animation-delay-4000 bg-violet-400 opacity-70"></div>
        <div className="relative rounded-xl shadow-lg my-auto bg-base-100/60">
          <div className="flex-1 justify-items-center px-6 py-10 sm:px-10">
            <div className="space-y-5">
              <p className="text-center font-bold text-xl sm:text-2xl">
                Raven Application
              </p>
              <p className="text-center">
                Enter your user and password to sign in to your account
              </p>
            </div>
            <div className="space-y-5 my-8">
              <input
                className="input input-accent input-sm w-full"
                placeholder="Username or email"
              />
              <input
                className="input input-accent input-sm w-full"
                type="password"
                placeholder="Password"
              />
              <div className="flex items-center gap-x-2">
                <input
                  className="checkbox checkbox-sm checkbox-accent"
                  type="checkbox"
                />
                <p>Remember me</p>
              </div>
            </div>
            <button className="btn btn-sm btn-accent w-full" onClick={login}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
