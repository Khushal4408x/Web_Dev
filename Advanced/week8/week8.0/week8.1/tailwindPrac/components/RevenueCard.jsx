export function RevenueCard({ title, count, amount }) {
    return <div className="bg-white rounded shadow-sm p4" >

        <div className="text-gray-700 flex justify-center flex-col">
            <div className="flex">
            <div className=" text-sm">
                {title}
            </div>
            <div className=" ml-1 flex justify-center flex-col" >
                <svg class="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://w3.org">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

            </div>
            </div>
        </div>
        <div className="flex justify-between">
            <div className=" font-semibold text-3xl" >
                ₹ {amount}

            </div>
            {
                count ? <div className="flex cursor-pointer underline font-medium flex flex-col justify-center
">
                    <div className="flex">
                        <div className=" text-[#146eb4]">  {count} Order(s)</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="size-6 text-[#146eb4]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>
                    : null
            }
        </div>


    </div>
}