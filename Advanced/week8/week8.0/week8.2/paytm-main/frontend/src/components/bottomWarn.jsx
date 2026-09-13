
import { Link,BrowserRouter } from "react-router-dom";

export default function BottomWaning({ label, buttonText, to }) {
    return (
        <div className="flex justify-center items-center gap-1 mt-5 text-sm pb-3">
            <span className="text-slate-500">
                {label}
            </span>

            <Link
                className="
                    text-slate-800
                    font-semibold
                    hover:text-slate-950
                    hover:underline
                    transition-colors
                    duration-200
                "
                to={to}
            >
                {buttonText}
            </Link>
        </div>
    );
}

