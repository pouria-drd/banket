"use client";

import NavLink from "./Navlink";
import { isLinkActive } from "@/utils";
import LinkManager from "./LinkManager";
import { Button } from "@/components/ui";
import { usePathname } from "next/navigation";
import { BanketIcon } from "@/components/icons";
import baseNavlinks from "@/constants/navlinks";

const Navbar = () => {
    const pathName = usePathname();
    const navLinks = baseNavlinks;
    return (
        <header className="bg-white/90 sticky top-0 z-50 pt-10 glass">
            <nav
                className="bg-ada-secondary-50
                flex items-center justify-between
                transition-all duration-300 text-white
                rounded-[40px] px-6 py-3 h-[64px]
                gap-2 xl:gap-4 2xl:gap-6">
                <BanketIcon />

                <LinkManager
                    links={navLinks}
                    className="border-x border-x-[#424A58]
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
                    className="px-4 md:px-6 xl:px-8
                    2xl:px-12 text-xs xl:text-sm 2xl:text-base">
                    دانلود بانکت
                </Button>
            </nav>
        </header>
    );
};

export default Navbar;
