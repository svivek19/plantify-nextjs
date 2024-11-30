import Image from "next/image";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { FaRegHeart, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import logo from "../../public/logo.webp";

const navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-green-50">
        {/* Logo and Branding */}
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="logo"
            className="rounded-full"
            width={40}
            height={40}
          />
          <Link href="/" className="text-xl font-bold text-green-700">
            Plantify
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-6 text-sm font-semibold text-green-700">
            <li>
              <Link
                href="/"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="hover:text-green-500 transition-colors duration-300"
              >
                My Account
              </Link>
            </li>
          </ul>
        </div>

        {/* User Actions */}
        <div>
          <ul className="flex items-center gap-6 text-sm font-medium text-green-700">
            <li className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors duration-300">
              <FaUserAlt size={18} />
              <span>Login / Register</span>
            </li>
            <li className="flex items-center gap-2 relative hover:text-green-500 cursor-pointer transition-colors duration-300">
              <FaRegHeart size={20} />
              <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </li>
            <li className="flex items-center gap-2 relative hover:text-green-500 cursor-pointer transition-colors duration-300">
              <BiCart size={20} />
              <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </li>
            <li className="hover:text-green-500 cursor-pointer transition-colors duration-300">
              <FaSignOutAlt size={20} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
