import React from "react";
import {
    BanketIcon2,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from "@/components/icons";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-ada-secondary-50 text-white">
            {/* Large Screen Layout */}
            <div className="hidden md:flex items-center justify-between px-16 py-10">
                {/* Newsletter */}
                <div className="max-w-xs">
                    <p className="mb-4 text-gray-300">
                        برای اطلاع از خبرهای جدید عضو خبرنامه ما شوید.
                    </p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"
                            className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-yellow-500 text-black rounded-r-md hover:bg-yellow-600">
                            ➡️
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-16">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            لینک اصلی
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    صفحه اصلی
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    سرویس‌ها
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    افتتاح حساب
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            درباره ما
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    پشتیبانی
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    بلاگ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Logo and Social Links */}
                <div className="flex flex-col items-center justify-center gap-10">
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
            <div className="md:hidden px-6 py-10 space-y-8">
                {/* Logo and Social Links */}
                <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500">
                        Banket
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white text-xl">
                            X
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white text-xl">
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white text-xl">
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="text-center">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">لینک اصلی</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    صفحه اصلی
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    سرویس‌ها
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    افتتاح حساب
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">درباره ما</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    پشتیبانی
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white">
                                    بلاگ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="text-center">
                    <p className="mb-4 text-gray-300">
                        برای اطلاع از خبرهای جدید عضو خبرنامه ما شوید.
                    </p>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"
                            className="px-4 py-2 w-2/3 rounded-l-md bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-yellow-500 text-black rounded-r-md hover:bg-yellow-600">
                            ➡️
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div
                className="border-t border-ada-dark-outline-neutral-60
                py-4 text-center text-sm text-gray-400">
                © تمامی حقوق متعلق به عصردانش افزار می‌باشد.
            </div>
        </footer>
    );
};

export default Footer;
