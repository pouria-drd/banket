import { Ticker } from "@/components/ticker";
import { InBanketSection } from "@/components/home/in-banket";
import { LoanSection, OpenAccountSection } from "@/components/home";
import { BuyGoldSection } from "@/components/home/buy-gold";

function Home() {
    const words = ["دیجیتال بانک", "وام بانکی", "خرید طلا", "سرمایه گذاری"];

    return (
        <div className="">
            <LoanSection className="pt-6 sm:pt-[104px] app-px py-12 sm:py-28" />
            <Ticker words={words} />
            <OpenAccountSection className="app-px py-12 sm:py-28" />
            <InBanketSection className="app-px" />
            <BuyGoldSection className="app-px py-12 sm:py-28" />
        </div>
    );
}

export default Home;
