
export function RevenueCard({ title, orderCount, amount }) {
    return <div className="bg-white rounded shadow-md p-10">
        <div className="text-gray-700 flex ">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>

        </div>
        <div className="flex justify-between">
            <div className="font-semi-bold text-2xl">
                $ {amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium">
                <div className="text-blue-700 ">
                    {orderCount} order(s)
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div> : null}
        </div>
    </div>
}