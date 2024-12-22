"use client";

import { cn } from "@/utils";
import { motion, Variants } from "framer-motion";

interface LinkManagerProps {
    links: NavLink[];
    className?: string;
    renderItem: (link: NavLink, index: number) => React.ReactNode;
}

const LinkManager = (props: LinkManagerProps) => {
    const container: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={cn("flex items-center", props.className)}>
            {props.links.map((link, index) => props.renderItem(link, index))}
        </motion.div>
    );
};

export default LinkManager;
