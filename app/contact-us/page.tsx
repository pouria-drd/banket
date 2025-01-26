import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@/components/icons";

function ContactUsPage() {
    return (
        <div className="bg-white flex flex-col items-center app-px">
            <div className="bg-ada-primary-99 flex flex-col items-center rounded-lg my-20 py-8 w-full">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                    تماس با ما
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
                    راه‌های ارتباطی بانکت
                </p>

                <Link
                    target="_blank"
                    href="tel:0214322"
                    className="flex items-center justify-center gap-6 max-w-xl text-center">
                    <span className="bg-white p-2 rounded-lg shadow mt-2">
                        <PhoneIcon className="w-10" />
                    </span>

                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <p className="text-gray-800 text-2xl font-bold">
                            شماره تماس
                        </p>
                        <p className="text-2xl font-bold text-gray-600">
                            021-4322
                        </p>
                    </div>
                </Link>
            </div>
            <div
                className="bg-gray-100 flex flex-col lg:flex-row
                items-center gap-8 rounded-lg mt-12 mb-24 p-8 w-full h-72">
                <div className="flex items-center justify-center w-full h-full gap-8">
                    <Image
                        src="/images/mehr-logo.png"
                        alt="Bank Logo"
                        width={350}
                        height={75}
                    />
                    <span className="lg:border-l h-full"></span>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <p className="text-xl lg:text-2xl text-gray-600">
                        پشتیبانی ۲۴ ساعته، ۷ روز هفته
                    </p>

                    <Link
                        target="_blank"
                        href="tel:0214322"
                        className="flex items-center justify-center gap-6 max-w-xl text-center">
                        <span className="bg-white p-2 rounded-lg shadow mt-2">
                            <PhoneIcon className="w-10" />
                        </span>

                        <div className="flex flex-col items-center justify-center gap-2 mt-4">
                            <p className="text-gray-800 text-2xl font-bold">
                                شماره تماس
                            </p>
                            <p className="text-2xl font-bold text-gray-600">
                                021-4322
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
