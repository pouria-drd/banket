import { cn } from "@/utils";

interface TitleProps {
    className?: string;
    children?: React.ReactNode;
}

const H1Title = (props: TitleProps) => {
    return (
        <h1
            className={cn(
                "text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-ada-neutral-10",
                props.className
            )}>
            {props.children}
        </h1>
    );
};

export default H1Title;
