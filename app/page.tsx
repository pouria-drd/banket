import { Ticker } from "@/components/ticker";
import { InBanketSection } from "@/components/home/in-banket";
import { LoanSection, OpenAccountSection } from "@/components/home";

function Home() {
    const words = ["دیجیتال بانک", "وام بانکی", "خرید طلا", "سرمایه گذاری"];

    return (
        <div className="space-y-12">
            <LoanSection className="pt-6 sm:pt-[104px] app-px" />
            <Ticker words={words} />
            <OpenAccountSection className="app-px" />
            <InBanketSection className="app-px" />
            <OpenAccountSection className="app-px" />
        </div>
    );
}

export default Home;
