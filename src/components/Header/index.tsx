import { FaTwitter, FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <nav className="bg-[#233659] h-14 flex">
        <div className="flex items-center whitespace-nowrap text-white">
          <a className="hover:bg-[#394b6a] h-full flex items-center px-5 font-bold tracking-widest cursor-pointer">
            APIHABBO
          </a>

          <a className="hover:bg-[#394b6a] h-full flex items-center px-5 text-sm cursor-pointer">
            Changelog
          </a>
          <a className="hover:bg-[#394b6a] h-full flex items-center px-5 text-sm cursor-pointer">
            Statistics
          </a>
          <a className="hover:bg-[#394b6a] h-full flex items-center px-5 text-sm cursor-pointer">
            Developers
          </a>
          <a className="hover:bg-[#394b6a] h-full flex items-center px-5 text-sm cursor-pointer">
            FAQ
          </a>
        </div>
        <div className="flex ml-auto items-center whitespace-nowrap text-white">
          <a className="bg-[#394b6a] h-full flex items-center px-5 text-sm cursor-pointer">
            <FaGithub size={24} />
          </a>
          <a className="bg-blue-400 h-full flex items-center px-5 text-sm cursor-pointer">
            <FaTwitter size={24} />
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
