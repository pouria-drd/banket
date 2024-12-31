import { B1, B2 } from ".";
import { cn } from "@/utils";
import Image from "next/image";
import { Button, Caption, Container, H1Title } from "@/components/ui";

interface OpenAccountSectionProps {
    className?: string;
}

const DownloadBanket = (props: OpenAccountSectionProps) => {
    return (
        <section
            className={cn(
                `flex flex-col lg:flex-row items-center justify-evenly gap-24 lg:gap-8`,
                props.className
            )}>
            <Container className="items-start justify-start gap-0 w-full sm:w-fit">
                <H1Title>دریافت برنامه بانکت</H1Title>
                <Caption className="mt-6">
                    بانکت، دیجیتال  بانک قرض‌الحسنه مهر ایران با هدف تحول <br />
                    خدمات بانکی و امور مالی در عصر بانک های دیجیتال همراه <br />
                    شماست.
                </Caption>

                <Button
                    target="_blank"
                    href="https://trc.metrix.ir/ndjwlw/"
                    className="mt-6">
                    افتتاح حساب
                </Button>
            </Container>

            <div className="relative ml-10 lg:ml-0">
                <Image
                    priority
                    alt="B1"
                    width={375}
                    height={375}
                    src={B1}
                    className="w-[320px] lg:w-[375px]"
                />
                <Image
                    priority
                    alt="B2"
                    width={375}
                    height={375}
                    src={B2}
                    className="absolute top-0 -left-14
                    w-[320px] lg:w-[375px]"
                />
            </div>
        </section>
    );
};

export default DownloadBanket;
