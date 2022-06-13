const Signup = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-100 text-gray-800 flex flex-col justify-center items-center py-6 sm:py-12 ">
        <div className="py-3 md:w-2/5 sm:w-96 w-80 sm:mx-auto text-center">
          <span className="text-2xl font-light">Signup with your account</span>
          <div className="mt-4 bg-white rounded-xl shadow-md text-left ">
            <div className="h-2 rounded-t-md bg-[#7A0BC0]"></div>
            <div className="px-8 py-6">
              <label className="block font-semibold">Username or Email</label>
              <input
                type="text"
                placeholder="Email"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none  focus:ring-1  focus:ring-[#7A0BC0] rounded-md"
              />
              <label className="block mt-3 font-semibold">
                Username or Email
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none  focus:ring-1  focus:ring-[#7A0BC0] rounded-md"
              />
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-[#7A0BC0] px-6 py-3 rounded-lg text-white hover:bg-white hover:text-[#7A0BC0] border-2 border-[#7A0BC0]"
                >
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forget Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
