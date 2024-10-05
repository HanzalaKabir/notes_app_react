import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { ImBin2 } from "react-icons/im";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        className={({ isActive }) => `${isActive ? "btn-active" : ""} btn`}
        to="/"
      >
        <AiOutlineHome className="icon" size="20" />
        Home
      </NavLink>
      {/* active==="#" ? " btn btn-active" : " btn " */}

      <NavLink
        className={({ isActive }) => `${isActive ? "btn-active" : ""} btn`}
        to="/archived"
      >
        <BiArchiveIn className="icon" size="20" />
        Archive
      </NavLink>

      <NavLink
        className={({ isActive }) => `${isActive ? "btn-active" : ""} btn`}
        to="/bin"
      >
        <ImBin2 className="icon" size="20" />
        Bin
      </NavLink>
    </div>
  );
};
