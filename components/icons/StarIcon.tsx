import { cn } from "@/utils";

const StarIcon = (props: IconProps) => {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-6 md:w-10", props.className)}>
            <path
                d="M20 0L25.4018 14.5982L40 20L25.4018 25.4018L20 40L14.5982 25.4018L0 20L14.5982 14.5982L20 0Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default StarIcon;
