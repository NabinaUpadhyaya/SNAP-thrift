import React from "react";
const signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5F41E4]">
      <div className="bg-[#fff] p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-xl font-bold text-center mb-4">Signup</h1>

        {/* Login buttons */}

        {/* Login form */}
        <form>
          <div className="mb-4">
            <input
              type="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="int"
              placeholder="Contact no."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          </div>
          {/* 
      <div className="mb-4 text-right text-sm hover:underline">
      <a href="#" className="text-[#5F41E4] hover:underline">
      Forget Password?
        </a>
        </div> */}

          <button
            type="submit"
            className="w-full bg-[#5F41E4] text-[#D5CBFF] font-bold py-2 px-4 rounded-md hover:bg-[#5F41E4]"
          >
            Sign Up
          </button>
          <div className="text-center mb-4">or</div>
          <div className="flex justify-between gap-4 mb-4">
            <button className="flex items-center justify-center w-1/2 px-4 py-2 border rounded-md bg-[#D5CBFF] hover:bg-[#D5CBFF]">
              <img src="/1/apple.svg" alt="Apple" className="h-5 mr-2" />
              Apple
            </button>
            <button className="flex items-center justify-center w-1/2 px-4 py-2 border rounded-md bg-[#D5CBFF] hover:bg-[#D5CBFF]">
            <Image src={Google} alt="Google" className="h-5 mr-2" width={10} height={10} />

              Google
            </button>
          </div>
        </form>

        <div className="text-center text-sm mt-4 ">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#5F41E4] font-bold hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default signup;
