import { LoanImage } from ".";
import { cn } from "@/utils";
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
                `flex flex-col sm:flex-row items-center
            justify-between gap-10 sm:gap-0 px-0 sm:px-4`,
                props.className
            )}>
            <Container className="items-start justify-start gap-0 w-full sm:w-fit">
                <H1Title>
                    تا ۴۰۰ میلیون وام <br />
                    با دیجیتال بانک مهر ایران
                </H1Title>
                <div className="relative w-full mt-0 sm:mt-2">
                    <Line />
                </div>
                <Caption className="mt-6">
                    بانکت، دیجیتال  بانک قرض‌الحسنه مهر ایران با هدف تحول <br />
                    خدمات بانکی و امور مالی در عصر بانک های دیجیتال همراه <br />
                    شماست.
                </Caption>

                <Button href="/" className="mt-6">
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
                    className="w-[239px] sm:w-[230px] md:w-[320px] lg:w-[375px]"
                />
            </div>
        </section>
    );
};

export default LoanSection;
