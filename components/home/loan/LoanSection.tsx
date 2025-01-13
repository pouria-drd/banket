import { cn } from "@/utils";
import { LoanImage } from ".";
import Image from "next/image";
import { Line } from "@/components/icons";
import { Button, Caption, Container, H1Title } from "@/components/ui";

interface LoanSectionProps {
    className?: string;
}

const LoanSection = (props: LoanSectionProps) => {
    return (
        <section
            className={cn(
                `flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-0`,
                props.className
            )}>
            <Container className="items-start justify-start gap-0 w-full sm:w-fit">
                <H1Title className="flex flex-col gap-0.5 sm:gap-2 lg:gap-4">
                    <span>تا ۴۰۰ میلیون وام</span>
                    <span>با دیجیتال بانک مهر ایران</span>
                </H1Title>
                <div className="relative w-full">
                    <Line className="-top-1.5 sm:top-0 lg:top-1.5" />
                </div>
                <Caption className="mt-6">
                    بانکت، دیجیتال  بانک قرض‌الحسنه مهر ایران با هدف تحول <br />
                    خدمات بانکی و امور مالی در عصر بانک های دیجیتال همراه <br />
                    شماست.
                </Caption>

                <Button
                    target="_blank"
                    href="https://trc.metrix.ir/ndjwlw/"
                    className="mt-6">
                    دانلود بانکت
                </Button>
            </Container>

            <div>
                <Image
                    src={LoanImage}
                    alt="loan"
                    width={375}
                    height={375}
                    priority
                    className="w-[239px] sm:w-[230px] md:w-[320px] lg:w-[420px]"
                />
            </div>
        </section>
    );
};

export default LoanSection;
