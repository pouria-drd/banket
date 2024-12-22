"use client";

import Link from "next/link";

interface NavLinkProps {
    link: NavLink;
    isActive: boolean;
}

const NavLink = (props: NavLinkProps) => {
    return (
        <Link
            href={props.link.url}
            className={`
            transition-all duration-75 text-white hover:text-gray-200
            font-bold rounded-[20px] text-base
            py-2 ${props.isActive ? "active-navlink px-10" : "px-4"}`}>
            {props.link.name}
        </Link>
    );
};

export default NavLink;
