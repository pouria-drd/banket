import { cn } from "@/utils";
import Image from "next/image";
import { FacilitiesImage } from ".";
import { Button, Caption, Container, H1Title } from "@/components/ui";

interface FacilitiesSectionProps {
    className?: string;
}

const FacilitiesSection = (props: FacilitiesSectionProps) => {
    return (
        <section
            className={cn(
                `flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-0`,
                props.className
            )}>
            <Container className="items-start justify-start gap-0 w-full sm:w-fit">
                <H1Title>سرمایه گذاری</H1Title>
                <Caption className="mt-6">
                    بانکت، دیجیتال  بانک قرض‌الحسنه مهر ایران با هدف تحول <br />
                    خدمات بانکی و امور مالی در عصر بانک های دیجیتال همراه <br />
                    شماست.
                </Caption>

                <Button
                    target="_blank"
                    href="https://trc.metrix.ir/ndjwlw/"
                    className="mt-6">
                    پرداخت وام
                </Button>
            </Container>

            <div>
                <Image
                    priority
                    alt="loan"
                    width={375}
                    height={375}
                    src={FacilitiesImage}
                    className="w-[239px] sm:w-[230px] md:w-[320px] lg:w-[375px]"
                />
            </div>
        </section>
    );
};

export default FacilitiesSection;
