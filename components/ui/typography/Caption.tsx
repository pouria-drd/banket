import { cn } from "@/utils";

interface DescriptionProps {
    className?: string;
    children?: React.ReactNode;
}

const Caption = (props: DescriptionProps) => {
    return (
        <p
            className={cn(
                `text-sm sm:text-base md:text-lg lg:text-xl text-ada-neutral-40`,
                props.className
            )}>
            {props.children}
        </p>
    );
};

export default Caption;
