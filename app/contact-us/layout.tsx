import type { Metadata } from "next";

const keywords = [
    "بانکت",
    "تماس با ما",
    "پشتیبانی",
    "پشتیبانی بانکت",
    "تماس",
    "تماس با پشتیبانی",
    "بانکت تماس",
    "بانکت پشتیبانی",
    "تماس با بانکت",
    "پشتیبانی بانکت تماس",
    "تماس با پشتیبانی بانکت",
];

export const metadata: Metadata = {
    title: "تماس با ما",
    description: "تماس با پشتیبانی بانکت",
    keywords: keywords,
};

interface ContactUsLayoutProps {
    children: React.ReactNode;
}
function ContactUsLayout(props: ContactUsLayoutProps) {
    return <main>{props.children}</main>;
}

export default ContactUsLayout;
