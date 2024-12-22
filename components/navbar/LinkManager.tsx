"use client";

import { cn } from "@/utils";

interface LinkManagerProps {
    links: NavLink[];
    className?: string;
    renderItem: (link: NavLink, index: number) => React.ReactNode;
}

const LinkManager = (props: LinkManagerProps) => {
    return (
        <div className={cn("flex items-center", props.className)}>
            {props.links.map((link, index) => props.renderItem(link, index))}
        </div>
    );
};

export default LinkManager;
