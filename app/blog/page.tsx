import Image from "next/image";
import { SearchIcon } from "@/components/icons";
import { Caption, Container, H1Title } from "@/components/ui";

function page() {
    return (
        <div className="flex flex-col gap-10 app-px py-10">
            {/* Search Area */}
            <div className="flex items-center justify-center">
                <div
                    className="bg-ada-neutral-99 text-ada-neutral-30
                    flex items-center justify-center
                    outline outline-1 outline-ada-secondary-80 
                    focus-within:outline-2 focus-within:outline-ada-secondary-70
                    rounded-[30px] min-w-full sm:min-w-[438px] p-1 px-3.5 group">
                    <SearchIcon />

                    <input
                        type="text"
                        placeholder="جستجو"
                        className="bg-transparent text-ada-neutral-10
                        placeholder:text-ada-neutral-60 outline-none border-none w-full px-2.5 py-3"
                    />
                </div>
            </div>
            {/* Top Blogs */}
            <div className="container mx-auto">
                <div
                    className="grid grid-cols-1 sm:grid-cols-none mx-auto
                    sm:grid-rows-10 sm:grid-flow-col gap-6">
                    <div className="sm:row-span-10 sm:col-span-8">
                        <Image
                            src="/images/blog/blog-1.png"
                            alt="blog-1"
                            width={519}
                            height={550}
                            className="size-full rounded-3xl"
                        />
                    </div>
                    <div className="sm:row-span-5 sm:col-span-8">
                        <Image
                            src="/images/blog/blog-2.png"
                            alt="blog-1"
                            width={519}
                            height={263}
                            className="size-full rounded-3xl"
                        />
                    </div>
                    <div className="sm:row-span-5 sm:col-span-8">
                        <Image
                            width={519}
                            height={263}
                            alt="blog-1"
                            src="/images/blog/blog-3.png"
                            className="size-full  rounded-3xl"
                        />
                    </div>
                </div>
            </div>
            {/* Video Section */}
            <section className="flex flex-col sm:flex-row items-center justify-between gap-6 py-24">
                <div className="bg-gray-400 size-full rounded-3xl">
                    <div className="min-h-full">
                        <p className="min-h-full">
                            video video video video video
                        </p>
                    </div>
                </div>

                <Container className="items-start justify-start gap-0 w-full">
                    <H1Title className="text-lg sm:text-xl md:text-2xl lg:text-[28px]">
                        تیتر ویدئو
                    </H1Title>
                    <Caption className="text-justify text-base sm:text-base md:text-base lg:text-base mt-6">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                    </Caption>
                </Container>
            </section>
        </div>
    );
}

export default page;
