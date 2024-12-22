"use client";

import React from "react";
import { cn } from "@/utils";
import Link from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string; // Required for Link
    variant?: "primary";
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary";
}

type CombinedProps = LinkProps | ButtonProps;

const Button: React.FC<CombinedProps> = ({
    children,
    variant = "primary",
    className,
    ...props
}) => {
    if (variant === "primary") {
        const basePrimaryClasses = cn(
            `bg-ada-primary-50 hover:bg-ada-primary-50/95
            transition-all duration-75 
            font-bold rounded-[20px]
            px-4 md:px-8 lg:px-12 py-2
            text-ada-neutral-10 text-nowrap
            text-sm md:text-base`,
            className
        );

        if ("href" in props) {
            const { href, ...rest } = props as LinkProps;
            return (
                <Link href={href} className={basePrimaryClasses} {...rest}>
                    {children}
                </Link>
            );
        }

        return (
            <button className={basePrimaryClasses} {...(props as ButtonProps)}>
                {children}
            </button>
        );
    }
};

export default Button;
