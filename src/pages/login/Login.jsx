import React from "react";

function Login() {
  return (
    <div className="flex justify-center h-screen bg-orange-50">
      <div className="w-96 rounded-xl shadow-lg my-auto bg-white">
        <div className="grid justify-items-center p-10">
          <div className="space-y-5">
            <p className="text-center font-bold text-xl">Raven Application</p>
            <p className="text-center">
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
  );
}

export default Login;
