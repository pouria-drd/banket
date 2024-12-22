"use client";

import { cn } from "@/utils";
import { CloseIcon } from "@/components/icons";

interface CloseButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseButton: React.FC<CloseButtonProps> = ({
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
            <CloseIcon />
        </button>
    );
};

export default CloseButton;
