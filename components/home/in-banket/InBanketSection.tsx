import { cn } from "@/utils";
import { InBanketImage } from ".";
import { Button, Caption, Container, H1Title } from "@/components/ui";

interface OpenAccountSectionProps {
    className?: string;
}

const InBanketSection = (props: OpenAccountSectionProps) => {
    return (
        <section
            className={cn(
                `relative flex flex-col sm:flex-row items-center min-h-dvh
                justify-between gap-10 sm:gap-0 bg-cover bg-center`,
                props.className
            )}
            style={{ backgroundImage: `url("/in-banket.png")` }}>
            <Container className="items-start justify-start gap-0 w-full sm:w-fit z-10">
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
        </section>
    );
};

export default InBanketSection;
