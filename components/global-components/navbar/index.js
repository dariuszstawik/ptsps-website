"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navbarData from "./navbarData";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Logo from "../logo";
import Hamburger from "../hamburger";

const Navbar = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white border-b-2 border-b-gray-100 text-xl antialiased fixed w-screen h-28 flex justify-between items-center px-10 lg:px-16 py-4  top-0 left-0 z-50">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96 text-sm overflow-scroll"
            >
              {navbarData.map((item, index) => (
                <li
                  key={index}
                  onClick={(e) => {
                    toggleSubmenu(e);
                    handleMouseEnter(index);
                    console.log("---index---");
                    console.log(index);
                    console.log("---currentIndex---");
                    console.log(currentIndex);
                  }}
                >
                  <a>{item.title}</a>
                  {item.submenu &&
                    isSubmenuVisible &&
                    currentIndex === index && (
                      <ul className="p-2">
                        {item.submenu.map((subitem) => (
                          <li>
                            <a>{subitem.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}

              {/* <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
