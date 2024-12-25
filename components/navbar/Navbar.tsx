"use client";

import NavLink from "./Navlink";
import { Sidebar } from "../sidebar";
import { isLinkActive } from "@/utils";
import LinkManager from "./LinkManager";
import { Button } from "@/components/ui";
import { MenuButton } from "../ui/button";
import { usePathname } from "next/navigation";
import { BanketIcon } from "@/components/icons";
import { AnimatePresence } from "framer-motion";
import { baseNavlinks } from "@/constants/navlinks";
import { Fragment /*, useEffect*/, useState } from "react";

const Navbar = () => {
    const navLinks = baseNavlinks;
    const pathName = usePathname();
    // const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 500) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // sticky top-0 z-50 ${
    //     isScrolled ? "bg-transparent" : "bg-white"
    // }
    return (
        <Fragment>
            <header className={`transition-all bg-white lg:pt-10 lg:app-px`}>
                <nav
                    className="bg-ada-secondary-50
                    flex flex-row-reverse lg:flex-row items-center justify-between
                    transition-all duration-300 text-white
                    lg:rounded-[40px] py-3 h-[64px]
                    gap-2 xl:gap-4 2xl:gap-6 px-2 sm:px-6">
                    <BanketIcon className="hidden lg:block" />

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
                        target="_blank"
                        href="https://trc.metrix.ir/ndjwlw/"
                        className="px-4 md:px-6 lg:px-8 xl:px-12 py-2 text-xs lg:text-sm xl:text-base">
                        دانلود بانکت
                    </Button>

                    <BanketIcon className="block lg:hidden" />

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
