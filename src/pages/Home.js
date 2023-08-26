import { Link } from "react-router-dom";

const Home = (userDetails) => {
  const user = userDetails?.user;
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };
  return (
    <div className="">
      <div className="">Home here</div>
      <div>
        <input className="" defaultValue={user?.email} placeholder="" />
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
