import { Link } from "react-router-dom";
import { Menu } from "./Menu";

export default function Header() {
  return (
    <div className="flex p-10 gap-10 pb-5 ">
      <div className="">Logo : Running App</div>
      <div className="flex  flex-1 gap-10 text-slate-400">
        <Link to="/" className="hover:text-black">
          Dashboard
        </Link>
        <Link to="/community" className="hover:text-black">
          Community
        </Link>
      </div>

      <div className="">
        <Menu />
      </div>
    </div>
  );
}
