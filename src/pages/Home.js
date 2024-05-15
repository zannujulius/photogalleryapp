import { Link, useNavigate } from "react-router-dom";

const Home = ({}) => {
  let navigate = useNavigate();
  // const user = userDetails?.user;
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    navigate("/login");
  };
  return (
    <div className="">
      <div className="">Home here</div>
      <div>
        {/* <input className="" defaultValue={user?.email} placeholder="" /> */}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
