import { cn } from "@/utils";
// import { InBanketImage } from ".";
import { Button, Caption, Container, H1Title } from "@/components/ui";

interface OpenAccountSectionProps {
    className?: string;
}

const InBanketSection = (props: OpenAccountSectionProps) => {
    return (
        <section
            className={cn(
                `relative flex flex-col sm:flex-row items-center min-h-dvh
                bg-gradient-to-b
                from-[#D9D9D9]
                to-[#D9D9D9]
                justify-between gap-10 sm:gap-0`,
                props.className
            )}>
            <div
                className="bg-cover bg-center size-full min-h-dvh py-12"
                style={{ backgroundImage: `url("/in-banket.jpg")` }}>
                <Container className="items-center justify-center gap-6 sm:gap-12 w-full">
                    <Container className="gap-6">
                        <H1Title>تو بانکت همه چی تو جیاته</H1Title>
                        <Caption className="text-center">
                            خدمات بانکی و امور مالی رو تو بانکت استفاده کن ازش
                        </Caption>
                    </Container>

                    <Button
                        target="_blank"
                        href="https://trc.metrix.ir/ndjwlw/">
                        خرید طلا
                    </Button>
                </Container>
            </div>
        </section>
    );
};

export default InBanketSection;
