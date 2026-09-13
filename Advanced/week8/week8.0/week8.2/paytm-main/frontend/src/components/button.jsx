export default function Mybutton({ label }) {
    return (
        <button
            className="
                w-full
                bg-slate-800
                text-white
                font-semibold
                px-6
                py-2.5
                rounded-lg
                shadow-md

                transition-all
                duration-200

                hover:bg-slate-900
                hover:shadow-lg
                hover:-translate-y-0.5

                active:translate-y-0
                active:scale-95

                focus:outline-none
                focus:ring-2
                focus:ring-slate-400
                focus:ring-offset-2
            "
        >
            {label}
        </button>
    );
}