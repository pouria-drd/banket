import Link from "next/link";
import {
    ArrowUpLeftIcon,
    BanketIcon2,
    InstagramIcon,
    LinkedInIcon,
    MessageIcon,
    TwitterIcon,
} from "@/components/icons";

import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className="px-4 pb-4">
            <footer id="footer" className={`${styles.footer}`}>
                <div
                    className={`${styles.footerContent} flex items-center justify-center`}>
                    <p className="hidden md:block text-lg lg:text-xl">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از
                    </p>

                    <div
                        className="flex md:hidden items-center justify-between
                        text-ada-neutral-30 w-full px-1">
                        <Link
                            href="#"
                            className="hover:text-ada-neutral-10
                            flex items-center justify-center text-xl w-full">
                            <LinkedInIcon />
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-ada-neutral-10 text-xl w-full
                            flex items-center justify-center
                            border-r border-ada-dark-outline-neutral-60">
                            <InstagramIcon />
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-ada-neutral-10 text-xl w-full
                            flex items-center justify-center
                            border-r border-ada-dark-outline-neutral-60">
                            <TwitterIcon />
                        </Link>
                    </div>
                </div>

                <div className={styles.footerRightCurve} />

                {/* Large Screen Layout */}
                <div
                    className="hidden md:flex items-center justify-between 
                    bg-ada-secondary-50 px-12 lg:px-20 py-10 pt-20">
                    {/* Newsletter */}
                    <div className="max-w-xs">
                        <p className="mb-4 text-sm">
                            برای اطلاع از خبرهای جدید عضو خبرنامه ما شوید.
                        </p>
                        <div
                            className="relative bg-ada-dark-neutral-40
                            flex items-center justify-center
                            rounded-3xl p-1.5 pr-4">
                            <MessageIcon className="text-ada-neutral-60" />

                            <input
                                type="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className="w-full p-2
                                bg-transparent
                                text-ada-neutral-60
                                placeholder-ada-neutral-60
                                focus:outline-none"
                            />
                            <button
                                className="bg-yellow-500 hover:bg-yellow-600
                                transition-all text-white rounded-[50%] p-2">
                                <ArrowUpLeftIcon />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-start justify-between gap-20">
                        <div className="space-y-4">
                            <Link
                                href="#"
                                className="text-sm hover:text-ada-primary-50">
                                لینک اصلی
                            </Link>
                            <ul className="text-ada-neutral-60 space-y-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        صفحه اصلی
                                    </Link>
                                </li>
                                <li
                                    className=" py-2
                                    border-y border-ada-dark-outline-neutral-60">
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        سرویس‌ها
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        افتتاح حساب
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <Link
                                href="#"
                                className="text-sm hover:text-ada-primary-50">
                                درباره ما
                            </Link>
                            <ul className="text-ada-neutral-60 space-y-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        پشتیبانی
                                    </Link>
                                </li>
                                <li className="py-2 border-y border-ada-dark-outline-neutral-60">
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        بلاگ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Logo and Social Links */}
                    <div className="hidden md:flex flex-col items-center justify-center gap-10">
                        <div className="text-4xl font-bold text-yellow-500">
                            <BanketIcon2 />
                        </div>
                        <div
                            className="flex items-center justify-between
                            text-ada-dark-neutral-90 w-full px-1">
                            <Link
                                href="#"
                                className="hover:text-ada-primary-50 text-xl">
                                <LinkedInIcon />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-ada-primary-50 text-xl
                                border-r border-ada-dark-outline-neutral-60 pr-5">
                                <InstagramIcon />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-ada-primary-50 text-xl
                                border-r border-ada-dark-outline-neutral-60 pr-5">
                                <TwitterIcon />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div
                    className="bg-ada-secondary-50 
                    flex flex-col sm:flex-row-reverse items-center
                    justify-center sm:justify-between gap-12
                    md:hidden px-10 sm:px-12 pb-8">
                    {/* Logo and Social Links */}
                    <div className="hidden sm:flex flex-col items-center justify-between gap-8">
                        <div
                            className="text-4xl 
                            flex items-center justify-end w-full
                            font-bold text-yellow-500">
                            <BanketIcon2 />
                        </div>

                        {/* Newsletter */}
                        <div className="max-w-xs mx-auto">
                            <p className="mb-4 text-sm">
                                برای اطلاع از خبرهای جدید عضو خبرنامه ما شوید.
                            </p>
                            <div
                                className="relative bg-ada-dark-neutral-40
                                flex items-center justify-center
                                rounded-3xl p-1.5 pr-4">
                                <MessageIcon className="text-ada-neutral-60" />

                                <input
                                    type="email"
                                    placeholder="ایمیل خود را وارد کنید"
                                    className="w-full p-2
                                    bg-transparent
                                    text-ada-neutral-60
                                    placeholder-ada-neutral-60
                                    focus:outline-none"
                                />
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600
                                    transition-all text-white rounded-[50%] p-2">
                                    <ArrowUpLeftIcon />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-start justify-center gap-20 mt-20 sm:mb-0">
                        <div className="space-y-4">
                            <Link
                                href="#"
                                className="text-sm hover:text-ada-primary-50">
                                لینک اصلی
                            </Link>
                            <ul className="text-ada-neutral-60 space-y-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        صفحه اصلی
                                    </Link>
                                </li>
                                <li
                                    className=" py-2
                                    border-y border-ada-dark-outline-neutral-60">
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        سرویس‌ها
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        افتتاح حساب
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <Link
                                href="#"
                                className="text-sm hover:text-ada-primary-50">
                                درباره ما
                            </Link>
                            <ul className="text-ada-neutral-60 space-y-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        پشتیبانی
                                    </Link>
                                </li>
                                <li className="py-2 border-y border-ada-dark-outline-neutral-60">
                                    <Link
                                        href="#"
                                        className="hover:text-ada-primary-50">
                                        بلاگ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="sm:hidden max-w-xs mx-auto w-full">
                        <p className="mb-4 text-sm">
                            برای اطلاع از خبرهای جدید عضو خبرنامه ما شوید.
                        </p>
                        <div
                            className="relative bg-ada-dark-neutral-40
                                flex items-center justify-center
                                rounded-3xl p-1.5 pr-4">
                            <MessageIcon className="text-ada-neutral-60" />

                            <input
                                type="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className="w-full p-2
                                    bg-transparent
                                    text-ada-neutral-60
                                    placeholder-ada-neutral-60
                                    focus:outline-none"
                            />
                            <button
                                className="bg-yellow-500 hover:bg-yellow-600
                                    transition-all text-white rounded-[50%] p-2">
                                <ArrowUpLeftIcon />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div
                    className="border-t border-ada-dark-outline-neutral-60 rounded-b-3xl
                    bg-ada-secondary-50 py-4 text-center text-sm text-gray-400">
                    © تمامی حقوق متعلق به عصردانش افزار می‌باشد.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
