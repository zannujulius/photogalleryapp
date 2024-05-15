import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postAuthLoading,
  postLogin,
  postLoginGoogle,
  postLoginSucces,
} from "../redux/action/auth.action";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { authState, authFailure, authLoading } = useSelector(
    (state) => state.auth
  );
  const [searchParams] = useSearchParams();
  const authenticated = searchParams.get("authenticated"); // "testCode"
  const googleAuth = () => {
    dispatch(postLoginGoogle());
  };

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      if (data?.data?.token) {
        dispatch(postLoginSucces());
        return;
      }
      console.log(data, "user data");
    } catch (error) {
      console.log(error, "got error");
    }
  };

  const handleLogin = () => {
    if (!(email && password)) {
      alert("Please provide both fields");
      return;
    }
    dispatch(postLogin({ email, password }));
  };

  useEffect(() => {
    if (authState) {
      navigate("/");
    }
    if (authenticated) {
      getUser();
    }

    return () => {};
  }, [authState]);

  return (
    <div className="w-screen h-screen bg-[#f1f1f1] flex items-center justify-center">
      <div className="w-[400px] h-[500px] bg-white rounded-md shadow-sm p-10">
        <div className="text-center font-semibold text-2xl">Photo Gallery</div>
        <p className="font-light text-center pb-4 pt-2">Login to continue </p>
        <hr className="" />
        <div className="w-full mt-8">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border-[1px] bg-blue-50 mb-6 placeholder:font-light px-2 border-[#a1a1a1] w-full h-[41px] rounded-sm focus:outline-none"
            type="text"
            placeholder="Enter your email.."
          />
          <input
            className="border-[1px] bg-blue-50 mb-6 placeholder:font-light px-2 border-[#a1a1a1] w-full h-[41px] rounded-sm focus:outline-none"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your password.."
          />
        </div>
        <button
          disabled={authLoading}
          onClick={handleLogin}
          className="block h-[41px] bg-[#0f0f0f] w-full rounded-sm text-white"
        >
          {authLoading ? "Loading" : "Login"}
        </button>

        <div className="w-full my-4">
          <button
            disabled={authLoading}
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
              Login with Google
            </p>
          </button>
        </div>
        <hr className="" />
        <p className="font-light text-center pt-3 ">
          Create an account{" "}
          <Link className="underline text-blue-500" to={"/signup"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
