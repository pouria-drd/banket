import { cn } from "@/utils";
import { GoldSafe } from ".";
import { Button, Caption, Container, H1Title } from "@/components/ui";

interface LoanSectionProps {
    className?: string;
}

const BuyGoldSection = (props: LoanSectionProps) => {
    return (
        <section
            className={cn(
                `flex flex-col items-center bg-ada-secondary-50 justify-between gap-6 sm:gap-10`,
                props.className
            )}>
            <Container className="items-center justify-center gap-6 sm:gap-10 w-full sm:w-fit">
                <Container className="gap-6">
                    <H1Title className="text-white flex flex-col">
                        خرید طلا بدون اجرت
                    </H1Title>
                    <Caption className="text-ada-neutral-60 text-center">
                        بانکت، دیجیتال  بانک قرض‌الحسنه مهر ایران با هدف تحول
                        <br />
                        خدمات بانکی و امور مالی در عصر بانک های دیجیتال همراه
                        <br />
                        شماست.
                    </Caption>
                </Container>

                <Button
                    target="_blank"
                    href="https://trc.metrix.ir/ndjwlw/"
                    className="bg-white text-ada-secondary-50">
                    خرید طلا
                </Button>
            </Container>

            <div>
                <GoldSafe />
            </div>
        </section>
    );
};

export default BuyGoldSection;
