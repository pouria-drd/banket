import { cn } from "@/utils";

const BanketIcon = (props: IconProps) => {
    return (
        <svg
            viewBox="0 0 72 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                "min-w-20 min-h-7 max-w-20 max-h-7",
                props.className
            )}>
            <path
                d="M20.8828 18.2009C19.9053 18.2009 19.0283 17.9621 18.2517 17.4846C17.4751 16.9938 16.8591 16.3372 16.4039 15.5148C15.962 14.6792 15.7411 13.7374 15.7411 12.6895C15.7411 11.6416 15.9821 10.6999 16.4641 9.86419C16.9596 9.02854 17.6224 8.37195 18.4525 7.89443C19.2961 7.40365 20.2401 7.15825 21.2845 7.15825C22.3289 7.15825 23.2662 7.40365 24.0964 7.89443C24.9265 8.37195 25.5826 9.02854 26.0647 9.86419C26.5601 10.6999 26.8078 11.6416 26.8078 12.6895H26.0245C26.0245 13.7374 25.7969 14.6792 25.3416 15.5148C24.8998 16.3372 24.2905 16.9938 23.5139 17.4846C22.7373 17.9621 21.8603 18.2009 20.8828 18.2009ZM21.2845 16.4102C21.9674 16.4102 22.5766 16.251 23.1122 15.9327C23.6478 15.6011 24.0696 15.1567 24.3776 14.5996C24.6855 14.0292 24.8395 13.3925 24.8395 12.6895C24.8395 11.9732 24.6855 11.3365 24.3776 10.7794C24.0696 10.2091 23.6478 9.76471 23.1122 9.44636C22.5766 9.11475 21.9674 8.94895 21.2845 8.94895C20.615 8.94895 20.0058 9.11475 19.4568 9.44636C18.9212 9.76471 18.4927 10.2091 18.1713 10.7794C17.8634 11.3365 17.7094 11.9732 17.7094 12.6895C17.7094 13.3925 17.8634 14.0292 18.1713 14.5996C18.4927 15.1567 18.9212 15.6011 19.4568 15.9327C20.0058 16.251 20.615 16.4102 21.2845 16.4102ZM25.7835 18.1412C25.4889 18.1412 25.2412 18.0483 25.0403 17.8626C24.8529 17.6637 24.7592 17.4183 24.7592 17.1265V14.0823L25.1408 11.9732L26.8078 12.6895V17.1265C26.8078 17.4183 26.7074 17.6637 26.5065 17.8626C26.3191 18.0483 26.0781 18.1412 25.7835 18.1412Z"
                fill="#F0B800"
            />
            <path
                d="M39.136 18.1412C38.8414 18.1412 38.5937 18.0483 38.3928 17.8626C38.2054 17.6637 38.1116 17.4183 38.1116 17.1265V12.2319C38.1116 11.4758 37.971 10.859 37.6898 10.3815C37.4087 9.90399 37.0271 9.55248 36.545 9.32698C36.0764 9.08823 35.5341 8.96885 34.9181 8.96885C34.3558 8.96885 33.847 9.08159 33.3917 9.30709C32.9364 9.53258 32.5749 9.83766 32.3071 10.2223C32.0393 10.5937 31.9054 11.0248 31.9054 11.5156H30.6401C30.6401 10.68 30.8409 9.93715 31.2426 9.28719C31.6577 8.62397 32.2201 8.10003 32.9298 7.71536C33.6394 7.33069 34.4361 7.13836 35.3198 7.13836C36.2437 7.13836 37.0672 7.33732 37.7903 7.73526C38.5267 8.11992 39.1025 8.69029 39.5176 9.44636C39.946 10.2024 40.1603 11.1309 40.1603 12.2319V17.1265C40.1603 17.4183 40.0599 17.6637 39.859 17.8626C39.6715 18.0483 39.4305 18.1412 39.136 18.1412ZM30.8811 18.1412C30.5865 18.1412 30.3388 18.0483 30.138 17.8626C29.9505 17.6637 29.8568 17.4183 29.8568 17.1265V8.25257C29.8568 7.94749 29.9505 7.70209 30.138 7.51639C30.3388 7.33069 30.5865 7.23784 30.8811 7.23784C31.1891 7.23784 31.4368 7.33069 31.6242 7.51639C31.8117 7.70209 31.9054 7.94749 31.9054 8.25257V17.1265C31.9054 17.4183 31.8117 17.6637 31.6242 17.8626C31.4368 18.0483 31.1891 18.1412 30.8811 18.1412Z"
                fill="#F0B800"
            />
            <path
                d="M45.4755 14.142L44.2303 12.789L50.3963 7.33732C50.5972 7.15162 50.8181 7.0654 51.0591 7.07867C51.3135 7.09193 51.5278 7.19805 51.7018 7.39701C51.8893 7.59598 51.9763 7.81484 51.9629 8.0536C51.9495 8.29236 51.8424 8.50459 51.6416 8.69029L45.4755 14.142ZM44.5315 18.1213C44.237 18.1213 43.996 18.0351 43.8085 17.8626C43.6344 17.6769 43.5474 17.4382 43.5474 17.1464V3.55696C43.5474 3.26515 43.6344 3.03302 43.8085 2.86058C43.996 2.67488 44.237 2.58203 44.5315 2.58203C44.8261 2.58203 45.0604 2.67488 45.2345 2.86058C45.422 3.03302 45.5157 3.26515 45.5157 3.55696V17.1464C45.5157 17.4382 45.422 17.6769 45.2345 17.8626C45.0604 18.0351 44.8261 18.1213 44.5315 18.1213ZM51.7018 18.0218C51.4876 18.1942 51.2466 18.2672 50.9788 18.2407C50.7244 18.2274 50.5101 18.1147 50.3361 17.9024L46.2588 12.9084L47.6648 11.5952L51.8424 16.6887C52.0165 16.901 52.0901 17.1331 52.0633 17.3851C52.05 17.6239 51.9294 17.8361 51.7018 18.0218Z"
                fill="#F0B800"
            />
            <path
                d="M59.1439 18.2009C58.0325 18.2009 57.0417 17.9688 56.1713 17.5045C55.3144 17.027 54.6382 16.377 54.1427 15.5546C53.6607 14.719 53.4197 13.7639 53.4197 12.6895C53.4197 11.6018 53.6473 10.6468 54.1026 9.8244C54.5712 8.98874 55.2139 8.33879 56.0307 7.87453C56.8475 7.39701 57.7848 7.15825 58.8426 7.15825C59.887 7.15825 60.7841 7.39038 61.534 7.85463C62.2838 8.30562 62.8529 8.93568 63.2412 9.74481C63.6429 10.5407 63.8437 11.4626 63.8437 12.5104C63.8437 12.7625 63.7567 12.9747 63.5826 13.1471C63.4085 13.3063 63.1876 13.3859 62.9198 13.3859H54.8256V11.7942H62.8595L62.0361 12.3513C62.0227 11.6881 61.8888 11.0978 61.6344 10.5805C61.38 10.0499 61.0184 9.63207 60.5498 9.32698C60.0812 9.0219 59.5121 8.86936 58.8426 8.86936C58.0794 8.86936 57.4233 9.03517 56.8743 9.36678C56.3387 9.69839 55.9303 10.156 55.6491 10.7396C55.3679 11.31 55.2273 11.96 55.2273 12.6895C55.2273 13.4191 55.3947 14.069 55.7294 14.6394C56.0642 15.2098 56.5261 15.6607 57.1153 15.9924C57.7044 16.324 58.3806 16.4898 59.1439 16.4898C59.5589 16.4898 59.9807 16.4168 60.4092 16.2709C60.8511 16.1117 61.2059 15.9327 61.4737 15.7337C61.6745 15.5878 61.8888 15.5148 62.1164 15.5148C62.3574 15.5016 62.565 15.5679 62.739 15.7138C62.9667 15.9128 63.0872 16.1316 63.1006 16.3704C63.114 16.6091 63.0068 16.8147 62.7792 16.9872C62.324 17.3453 61.7549 17.6371 61.072 17.8626C60.4025 18.0881 59.7598 18.2009 59.1439 18.2009Z"
                fill="#F0B800"
            />
            <path
                d="M70.4535 18.1213C69.784 18.1213 69.1814 17.9555 68.6459 17.6239C68.1103 17.279 67.6885 16.8147 67.3805 16.2311C67.0725 15.6475 66.9186 14.9909 66.9186 14.2613V4.77066C66.9186 4.47884 67.0123 4.24008 67.1997 4.05438C67.3872 3.86868 67.6282 3.77583 67.9228 3.77583C68.2174 3.77583 68.4584 3.86868 68.6459 4.05438C68.8333 4.24008 68.927 4.47884 68.927 4.77066V14.2613C68.927 14.7919 69.0743 15.2363 69.3689 15.5944C69.6635 15.9526 70.025 16.1316 70.4535 16.1316H71.1364C71.3774 16.1316 71.5782 16.2245 71.7389 16.4102C71.913 16.5959 72 16.8346 72 17.1265C72 17.4183 71.8862 17.657 71.6586 17.8427C71.4443 18.0284 71.1631 18.1213 70.815 18.1213H70.4535ZM65.9947 9.34688C65.7135 9.34688 65.4858 9.2673 65.3118 9.10812C65.1377 8.94895 65.0507 8.74998 65.0507 8.51122C65.0507 8.24594 65.1377 8.0337 65.3118 7.87453C65.4858 7.71536 65.7135 7.63577 65.9947 7.63577H70.6342C70.9154 7.63577 71.1431 7.71536 71.3171 7.87453C71.4912 8.0337 71.5782 8.24594 71.5782 8.51122C71.5782 8.74998 71.4912 8.94895 71.3171 9.10812C71.1431 9.2673 70.9154 9.34688 70.6342 9.34688H65.9947Z"
                fill="#F0B800"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.0309 0L8.53604 1.56323L6.68038 4.87361C10.3698 4.87361 13.3608 7.83783 13.3608 11.4944C13.3608 15.1509 10.3698 18.1151 6.68038 18.1151C2.99091 18.1151 0 15.1509 0 11.4944C0 9.8848 0.579538 8.40938 1.54309 7.26189L6.0309 0ZM6.68038 8.00008C4.73316 8.00008 3.15462 9.56453 3.15462 11.4944C3.15462 13.4242 4.73316 14.9887 6.68038 14.9887C8.6276 14.9887 10.2061 13.4242 10.2061 11.4944C10.2061 9.56453 8.6276 8.00008 6.68038 8.00008Z"
                fill="white"
            />
            <path
                d="M6.68041 23.9998C7.91023 23.9998 8.9072 23.0117 8.9072 21.7929C8.9072 20.574 7.91023 19.5859 6.68041 19.5859C5.45058 19.5859 4.45361 20.574 4.45361 21.7929C4.45361 23.0117 5.45058 23.9998 6.68041 23.9998Z"
                fill="white"
            />
        </svg>
    );
};

export default BanketIcon;