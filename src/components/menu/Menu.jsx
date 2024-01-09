import React from "react";
import { Link } from "react-router-dom/dist";

function Menu() {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-sm drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link>Sidebar Item 1</Link>
              <Link>Sidebar Item 2</Link>
              <ul>
                <li>
                  <Link>Item 1</Link>
                  <Link>Item 2</Link>
                  <Link>Item 3</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Sidebar Item 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
