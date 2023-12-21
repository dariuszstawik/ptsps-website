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

  return (
    <div className="bg-white border-b-2 border-b-gray-100 text-xl antialiased fixed w-screen h-28 flex justify-between items-center px-10 lg:px-16 py-4  top-0 left-0 z-50">
      {/* <div className="h-28"> */}
      <Logo closeMobileMenu={closeMobileMenu} />
      <div className="pl-16 w-full flex justify-end items-center gap-6 h-28">
        {/* <div className="relative"> */}
        <NavigationMenu>
          <NavigationMenuList>
            <ul
              className={
                isMobileMenuActive
                  ? " list-none absolute z-40 w-screen top-full left-0 bg-gray-50 py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row"
                  : " list-none flex-col justify-center align-center items-center gap-10 lg:flex-row my-4 hidden lg:flex lg:justify-end ml-4"
              }
            >
              {navbarData.map((nav) => {
                const isActive = pathname === nav.path;

                return (
                  <NavigationMenuItem key={nav.id}>
                    {nav.submenu ? (
                      <>
                        <NavigationMenuTrigger>
                          {nav.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:min-w-[900px] lg:grid-cols-[.75fr_1fr]">
                            {nav.submenu.map((subnav) => {
                              return (
                                <li className="relative" key={subnav.id}>
                                  {/* <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                  > */}
                                  <Link
                                    href={subnav.path}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {subnav.title}
                                    </div>
                                  </Link>
                                  {/* </NavigationMenuLink> */}
                                </li>
                              );
                            })}
                          </ul>
                        </NavigationMenuContent>{" "}
                      </>
                    ) : (
                      <>
                        {/* <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        > */}
                        <Link
                          href={nav.path}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            {nav.title}
                          </div>
                        </Link>
                        {/* </NavigationMenuLink> */}
                      </>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </ul>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Hamburger
        hasCloseIcon={isMobileMenuActive ? true : false}
        toggleMobileMenu={toggleMobileMenu}
      />
    </div>
  );
};

export default Navbar;
