import { cn } from "@/utils";

const GoldSafe = (props: IconProps) => {
    return (
        <svg
            fill="none"
            viewBox="0 0 402 402"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            className={cn("w-72 sm:w-80 md:w-[402px]", props.className)}>
            <rect width="402" height="402" fill="url(#pattern0_1348_6931)" />
            <defs>
                <pattern
                    id="pattern0_1348_6931"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <use
                        xlinkHref="#image0_1348_6931"
                        transform="scale(0.0005)"
                    />
                </pattern>
                <image
                    id="image0_1348_6931"
                    width="2000"
                    height="2000"
                />
            </defs>
        </svg>
    );
};

export default GoldSafe;