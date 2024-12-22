"use client";

import NavLink from "./Navlink";
import { Sidebar } from "../sidebar";
import { isLinkActive } from "@/utils";
import LinkManager from "./LinkManager";
import { Button } from "@/components/ui";
import { MenuButton } from "../ui/button";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import { BanketIcon } from "@/components/icons";
import { AnimatePresence } from "framer-motion";
import { baseNavlinks } from "@/constants/navlinks";

const Navbar = () => {
    const navLinks = baseNavlinks;
    const pathName = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <header className="transition-all bg-white sticky top-0 z-50 lg:pt-10 lg:app-px">
                <nav
                    className="bg-ada-secondary-50
                    flex flex-row-reverse lg:flex-row items-center justify-between
                    transition-all duration-300 text-white
                    lg:rounded-[40px] px-6 py-3 h-[64px]
                    gap-2 xl:gap-4 2xl:gap-6">
                    <BanketIcon />

                    <LinkManager
                        links={navLinks}
                        className="hidden lg:flex border-x border-x-[#424A58]
                        justify-evenly 2xl:justify-center gap-4 xl:gap-6 2xl:gap-8 px-1 w-full"
                        renderItem={(link, index) => (
                            <NavLink
                                link={link}
                                key={`navlink-${index}`}
                                isActive={isLinkActive(pathName, link.url)}
                            />
                        )}
                    />

                    <Button
                        href="/"
                        className="hidden lg:block             
                        px-4 md:px-6 lg:px-8 xl:px-12 py-2
                        text-ada-neutral-10 text-nowrap
                        text-xs lg:text-sm xl:text-base">
                        دانلود بانکت
                    </Button>

                    <MenuButton
                        className="lg:hidden"
                        onClick={() => setIsSidebarOpen(true)}
                    />
                </nav>
            </header>

            <AnimatePresence>
                {isSidebarOpen && (
                    <Sidebar onClick={() => setIsSidebarOpen(false)} />
                )}
            </AnimatePresence>
        </Fragment>
    );
};

export default Navbar;
