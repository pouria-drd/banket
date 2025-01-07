import { cn } from "@/utils";
import { Button, Caption, Container, H1Title } from "@/components/ui";

interface OpenAccountSectionProps {
    className?: string;
}

const OpenAccountSection = (props: OpenAccountSectionProps) => {
    return (
        <section
            className={cn(
                `flex flex-col sm:flex-row items-center justify-between gap-8`,
                props.className
            )}>
            <Container className="items-start justify-start gap-0 w-full">
                <H1Title>افتتاح حساب رایگان</H1Title>
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

            <Container className="w-full p-4">
                <video
                    loop
                    muted
                    autoPlay
                    width={900}
                    height={1200}
                    className="border-none p-4 
                    w-96 bg-transparent md:w-[420px] lg:w-[500px]">
                    <source src="/videos/open-account.mp4" type="video/mp4" />
                </video>
            </Container>
        </section>
    );
};

export default OpenAccountSection;
