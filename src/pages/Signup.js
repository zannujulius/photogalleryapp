import { Link } from "react-router-dom";

const Signup = () => {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    // <div className="">
    //   <div className="">Signup here</div>
    //   <div>
    //     <input className="" placeholder="" />
    //   </div>
    //   <button onClick={googleAuth}>Signup with google</button>
    //   <Link to={"/login"}>Login up</Link>
    // </div>
    <div className="w-screen h-screen bg-[#f1f1f1] flex items-center justify-center">
      <div className="w-[400px] bg-white rounded-md shadow-sm p-10">
        <div className="text-center font-semibold text-2xl">Photo Gallery</div>
        <p className="font-light text-center pb-4 pt-2">Login to continue </p>
        <hr className="" />
        <div className="w-full mt-8">
          <input
            className="border-[1px] bg-blue-50 mb-6 placeholder:font-light px-2 border-[#a1a1a1] w-full h-[41px] rounded-sm focus:outline-none"
            type="text"
            placeholder="Enter your firstname.."
          />
          <input
            className="border-[1px] bg-blue-50 mb-6 placeholder:font-light px-2 border-[#a1a1a1] w-full h-[41px] rounded-sm focus:outline-none"
            type="text"
            placeholder="Enter your lastname.."
          />
          <input
            className="border-[1px] bg-blue-50 mb-6 placeholder:font-light px-2 border-[#a1a1a1] w-full h-[41px] rounded-sm focus:outline-none"
            type="password"
            placeholder="Enter your password.."
          />
        </div>
        <button className="block h-[41px] bg-[#0f0f0f] w-full rounded-sm text-white">
          Login
        </button>

        <div className="w-full my-4">
          <button
            className="flex px-4 items-center justify-center h-[41px]  border-[1px] bg-[white] w-full rounded-md "
            onClick={googleAuth}
          >
            <div className="rounded-full w-[20px] h-[20px] flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-icon/search_318-265146.jpg"
                className="w-full h-full"
              />
            </div>
            <p className="text-[15px] pl-4 font-light text-[#0f0f0f]">
              Signup with Google
            </p>
          </button>
        </div>
        <hr className="" />
        <p className="font-light text-center pt-3 ">
          Have an account{" "}
          <Link className="underline text-blue-500" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
