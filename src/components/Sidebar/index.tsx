import { FcOpenedFolder, FcFile } from "react-icons/fc";
import { BiCodeCurly } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div
      className="bg-gray-200 max-xl:hidden max-w-xs min-w-xs border-r border-gray-300"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <div className="border-b border-gray-300 p-5">HabboAPI Documentation</div>
      <div className="border-b border-gray-300 mt-5 pb-5">
        <ul>
          <li className="text-xs px-5 flex items-center h-8 hover:bg-gray-300">
            <FcFile size={14} className="mr-2" /> Get Started
          </li>
          <li className="text-xs px-5 flex items-center h-8 hover:bg-gray-200">
            <FcOpenedFolder size={14} className="mr-2" /> Badges
          </li>
          <ul className="">
            <li className="text-xs px-10 flex items-center h-8 hover:bg-gray-300">
              <BiCodeCurly size={14} className="mr-2" /> Request
            </li>
          </ul>
          <li className="text-xs px-5 flex items-center h-8 hover:bg-gray-300">
            <FcOpenedFolder size={14} className="mr-2" /> Furniture
          </li>
          <ul className="">
            <li className="text-xs px-10 flex items-center h-8 hover:bg-gray-300">
              <BiCodeCurly size={14} className="mr-2" /> Request
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
