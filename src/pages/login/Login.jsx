import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative">
        <div className="absolute -top-16 -left-16 size-60 rounded-full filter blur-2xl animate-blob animation-delay-2000 bg-emerald-400 opacity-70"></div>
        <div className="absolute -bottom-16 -right-16 size-60 rounded-full filter blur-2xl animate-blob animation-delay-4000 bg-violet-400 opacity-70"></div>
        <div className="relative w-96 rounded-xl shadow-lg my-auto bg-white bg-opacity-70">
          <div className="grid justify-items-center p-10">
            <div className="space-y-5">
              <p className="text-center font-bold text-xl text-neutral-700">
                Raven Application
              </p>
              <p className="text-center text-neutral-600">
                Enter your user and password to sign in to your account
              </p>
            </div>
            <div className="space-y-3 my-8">
              <input
                className="w-full border rounded-md px-3 py-1"
                placeholder="Username or email"
              />
              <input
                className="w-full border rounded-md px-3 py-1"
                type="password"
                placeholder="password"
              />
            </div>
            <button className="w-full px-3 py-1 rounded-md transition-colors text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
