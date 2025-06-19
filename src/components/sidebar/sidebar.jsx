import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
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
    </div>
  );
};
