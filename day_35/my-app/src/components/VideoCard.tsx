

export function VideoCard() {

    return <div>
        <img src="/war.jpg" alt="war" />

        <div className="grid grid-cols-12">
            <div className="col-span-2 rounded-full w-20 h-20">
                <img className={"rounded-full w-20 h-20"} src="/war.jpg" alt="war" />
            </div>
            <div className="col-span-10 pl-5">
                Ubisoft (India)
            </div>

        </div>

    </div>
}