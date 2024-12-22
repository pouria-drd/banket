import { cn } from "@/utils";

const Line = (props: IconProps) => {
    return (
        <svg
            viewBox="0 0 270 28"
            fill="none"
            className={cn(
                `absolute
                right-[105px] sm:right-[131px] md:right-[156px] lg:right-[196px]
                w-[131px] sm:w-[200px] md:w-[240px] lg:w-[270px] h-[28px]`,
                props.className
            )}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.24045 24.1045C3.24045 24.1045 79.8774 8.91808 131.323 5.37179C182.768 1.8255 266.709 5.94277 266.709 5.94277"
                stroke="#F0B800"
                strokeWidth="6"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Line;
