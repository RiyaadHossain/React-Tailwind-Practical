import React, { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLink = [
    { id: 1, route: "/home", name: "Home" },
    { id: 2, route: "/shop", name: "Shop" },
    { id: 3, route: "/orders", name: "Orders" },
    { id: 4, route: "/coupons", name: "Coupons" },
    { id: 5, route: "/contact", name: "Contact" },
  ];
  return (
    <nav className="bg-blue-300 p-4  w-full">
      <div  onClick={() => setOpen(!open)}
          className={`w-6 h-6 lg:hidden`}>
        {open ? <XIcon/> : <MenuIcon />}
      </div>
          <ul className={`md:flex w-full duration-500 ease-in-out justify-center items-center bg-blue-300 py-4 lg:static  absolute ${open ? 'top-14' : 'top-[-520px]'}`}>
          {navLink.map((route) => (
        <NavLink key={route.id} route={route} />
      ))}
      </ul>
    </nav>
  );
};

export default Navbar;
