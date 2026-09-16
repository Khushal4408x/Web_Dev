
export default function Input({ label, type, placeholder ,onChange}) {
    return (
        <div className="flex items-center my-4">
            <div className="w-24 pr-2">
                <label className="text-sm font-medium text-slate-950">
                    {label}
                </label>
            </div>

            <input
                onChange={onChange}
                className="
                    w-64
                    px-3
                    py-2
                    text-sm
                    text-slate-800
                    bg-white
                    border
                    border-slate-300
                    rounded-lg
                    shadow-sm

                    placeholder:text-slate-400

                    transition-all
                    duration-200

                    hover:border-slate-400

                    focus:border-slate-600
                    focus:outline-none
                    focus:ring-2
                    focus:ring-slate-300

                    disabled:bg-slate-100
                "
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

