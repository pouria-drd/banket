import { Ticker } from "@/components/ticker";
import {
    BankingServicesSection,
    BuyGoldSection,
    DownloadBanket,
    FacilitiesSection,
    FeeSection,
    InBanketSection,
    InvestmentSection,
    LoanSection,
    OpenAccountSection,
} from "@/components/home";

function Home() {
    const words = [
        "دیجیتال بانک",
        "وام بانکی",
        "خرید طلا",
        "سرمایه گذاری",
        "دیجیتال بانک",
        "وام بانکی",
        "خرید طلا",
        "سرمایه گذاری",
        "دیجیتال بانک",
        "وام بانکی",
        "خرید طلا",
        "سرمایه گذاری",
    ];

    return (
        <div>
            <LoanSection className="pt-6 sm:pt-[104px] app-px py-12 sm:py-28" />
            <Ticker words={words} />
            <OpenAccountSection className="app-px py-12 sm:py-28" />
            <InBanketSection className="app-px" />
            <BuyGoldSection className="app-px py-12 sm:py-28" />
            <BankingServicesSection className="app-px py-12 sm:py-28" />
            <InvestmentSection className="app-px py-12 sm:py-28" />
            <FacilitiesSection className="app-px py-12 sm:py-28" />
            <FeeSection className="app-px py-12 sm:py-28" />
            <DownloadBanket className="app-px py-12 sm:py-28" />
        </div>
    );
}

export default Home;
