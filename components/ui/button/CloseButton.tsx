"use client";

import { cn } from "@/utils";
import { CloseIcon } from "@/components/icons";

const CloseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(
                `transition-all text-white hover:text-gray-300`,
                className
            )}
            {...props}>
            {children}
            <CloseIcon />
        </button>
    );
};

export default CloseButton;
