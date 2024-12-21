import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "بانکت",
    description: "دیجیتال بانک مهر ایران",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="fa-IR">
            <body className={`antialiased r2l`}>{children}</body>
        </html>
    );
}

export default RootLayout;
