import { cn } from "@/utils";

interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    return (
        <div
            className={cn(
                `flex flex-col items-center justify-center gap-4`,
                props.className
            )}>
            {props.children}
        </div>
    );
};

export default Container;
