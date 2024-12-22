"use client";

import { cn } from "@/utils";
import { MenuIcon } from "@/components/icons";

const MenuButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(
                `lg:hidden bg-[#3E424E] hover:bg-[#3E424E]/70 rounded-xl p-1.5`,
                className
            )}
            {...props}>
            <MenuIcon className="text-white" />
            {children}
        </button>
    );
};

export default MenuButton;
