import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import SearchBar from "./SearchBar";

const Navbar = ({handleSearchText}) => {
  return (
    <header className="h-18 bg-white w-full p-4 border-b-2 border-gray flex justify-around items-center">
      <Link to="/">
        <h2 className="font-[600] text-lg bg-white hover:cursor-pointer">
          GAURAV NOTES
        </h2>
      </Link>

      <SearchBar handleSearchText={handleSearchText}/>

      <nav className="bg-white flex items-center justify-center list-none gap-4">
        <Link className="bg-white " to="/add-notes">
          <button className="bg-white hover:cursor-pointer flex items-center gap-1 rounded-full px-2 md:px-4 py-2 text-sm border border-black hover:bg-black hover:text-white font-semibold hover:scale-110">
            <IoIosAdd className="bg-inherit" size={20} /> Add Note
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
