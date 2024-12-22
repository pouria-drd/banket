"use client";

import { isLinkActive } from "@/utils";
import SidebarLink from "./SidebarLink";
import { usePathname } from "next/navigation";
import { BanketIcon } from "@/components/icons";
import { motion, Variants } from "framer-motion";
import { LinkManager } from "@/components/navbar";
import { baseNavlinks } from "@/constants/navlinks";
import { Button, CloseButton } from "@/components/ui";

interface SidebarProps {
    onClick: () => void;
}

const Sidebar = (props: SidebarProps) => {
    const pathName = usePathname();

    // Sidebar animation variants (with simple, smooth transitions)
    const sidebarVariants: Variants = {
        hidden: {
            x: "100%", // Start off-screen to the right
            opacity: 0,
            transition: {
                duration: 0.2, // 0.2 seconds
                ease: "easeInOut", // Smooth easing in and out
            },
        },
        visible: {
            x: 0, // Moves into view
            opacity: 1,
            transition: {
                duration: 0.2, // 0.2 seconds
                ease: "easeInOut", // Smooth easing in and out
            },
        },
        exit: {
            x: "100%", // Moves off-screen to the right
            opacity: 0,
            transition: {
                duration: 0.2, // 0.2 seconds
                ease: "easeInOut", // Smooth easing in and out
            },
        },
    };

    const navLinks = baseNavlinks;

    return (
        <motion.aside
            exit="exit"
            initial="hidden"
            animate="visible"
            variants={sidebarVariants}
            className="bg-ada-secondary-50 lg:hidden
            flex flex-col items-center justify-start gap-y-12
            size-full fixed inset-0 z-50 right-0 p-6"
            // Prevent click propagation
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
            }>
            <div className="flex items-center justify-between w-full">
                <CloseButton onClick={props.onClick} />
                <BanketIcon />
            </div>
            <LinkManager
                links={navLinks}
                className="flex flex-col gap-4 w-full"
                renderItem={(link) => (
                    <SidebarLink
                        link={link}
                        key={link.name}
                        onClick={props.onClick}
                        isActive={isLinkActive(pathName, link.url)}
                    />
                )}
            />
            <Button href="/" className="absolute px-4 text-sm bottom-10">
                دانلود بانکت
            </Button>
        </motion.aside>
    );
};

export default Sidebar;
