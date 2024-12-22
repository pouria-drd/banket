import Link from "next/link";
import { motion } from "framer-motion";

interface SidebarLinkProps {
    link: NavLink;
    isActive: boolean;
    onClick: () => void;
}

const SidebarLink = (props: SidebarLinkProps) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <motion.div
            onClick={props.onClick}
            variants={item}
            className={`flex items-center justify-end gap-2 px-4
                text-right rounded-lg min-h-11 py-1.5 w-full ${
                    props.isActive && `bg-ada-primary-50`
                }`}>
            <Link
                onClick={props.onClick}
                href={props.link.url}
                className={`transition-colors text-white w-full ${
                    props.isActive && "font-bold"
                }`}>
                {props.link.name}
            </Link>
        </motion.div>
    );
};

export default SidebarLink;
