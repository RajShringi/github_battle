import { NavLink } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Header({ theme, changeTheme }) {
  return (
    <div className="container mx-auto my-4 text-gray-700 dark:text-white">
      <nav>
        <ul className="flex justify-between itmes-center">
          <div className="flex justify-center items-center space-x-4">
            <NavLink exact activeClassName="text-red-600" to="/">
              <li className="font-bold text-lg">Popular</li>
            </NavLink>
            <NavLink activeClassName="text-red-600" to="/battle">
              <li className="font-bold text-lg">Battle</li>
            </NavLink>
          </div>
          <li className="text-2xl">
            {theme === "dark" ? (
              <BsFillSunFill className="text-white" onClick={changeTheme} />
            ) : (
              <BsFillMoonFill onClick={changeTheme} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
