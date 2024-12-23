import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: {
            default: "بانکت - دیجیتال بانک مهر ایران",
            template: "%s - بانکت",
        },
        description: "بانکت، دیجیتال بانک مهر ایران",
        creator: "عصر دانش افزار",
        publisher: "عصر دانش افزار",
        authors: [
            {
                name: "عصر دانش افزار",
                url: "https://asredanesh.com",
            },
        ],
        openGraph: {
            type: "website",
            url: "https://banket.app",
            title: "بانکت",
            description: "بانکت، دیجیتال بانک مهر ایران",
            siteName: "بانکت",
        },
        twitter: {
            title: "بانکت",
            card: "summary_large_image",
            description: "بانکت، دیجیتال بانک مهر ایران",
            site: "https://banket.app",
        },
        robots: {
            index: true,
            follow: true,
        },
        keywords: [
            "بانکت",
            "بانک",
            "دیجیتال",
            "مهر",
            "ایران",
            "افزار",
            "عصر دانش افزار",
            "بانک مهر ایران",
            "بانک دیجیتال مهر ایران",
            "بانک دیجیتال ایران",
            "بانک مهر",
            "بانک ایران",
            "دیجیتال مهر ایران",
            "دیجیتال ایران",
        ],
    };
}

interface RootLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="fa-IR">
            <body className={`antialiased font-peyda r2l`}>
                <Navbar />
                <main className="bg-white">{children}</main>
            </body>
        </html>
    );
}

export default RootLayout;
