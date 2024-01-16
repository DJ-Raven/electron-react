import React from "react";
import {
  HiOutlineHome,
  HiOutlineDesktopComputer,
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineChatAlt2,
  HiOutlineNewspaper,
  HiOutlineDocumentText,
} from "react-icons/hi";

function Navbar() {
  return (
    <div>
      <div>
        <div className="drawer z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <div className="flex items-center space-x-2 p-1.5 bg-base-300">
              <label
                htmlFor="my-drawer"
                aria-label="open sidebar"
                className="btn btn-sm btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <div className="flex-1">
                <p className="truncate">Raven Application</p>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a href="/dashboard">
                  <HiOutlineHome size={18} />
                  Dashboard
                </a>
              </li>
              <li>
                <details open>
                  <summary>
                    <HiOutlineDesktopComputer size={18} />
                    Product
                  </summary>
                  <ul>
                    <li>
                      <a href="/product">Product</a>
                    </li>
                    <li>
                      <a href="/product">Category</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="/#">
                  <HiOutlineCalendar size={18} />
                  Calendar
                </a>
              </li>
              <li>
                <a href="/#">
                  <HiOutlineMail size={18} />
                  Mail
                </a>
              </li>
              <li>
                <a href="/#">
                  <HiOutlineChatAlt2 size={18} />
                  Chat
                </a>
              </li>
              <li>
                <a href="/#">
                  <HiOutlineNewspaper size={18} />
                  Contacts
                </a>
              </li>
              <li>
                <a href="/#">
                  <HiOutlineDocumentText size={18} />
                  File Manager
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
