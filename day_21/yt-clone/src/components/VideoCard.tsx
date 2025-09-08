export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer">
        <img className="rounded-xl" src={props.image} alt="Video thumbnail" />

        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className={"rounded-full w-12 h-12"} src={props.thumbImage} alt="Video thumbnail" />
            </div>

            <div className="col-span-11 pl-2 ">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    {props.author}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    {props.views} | {props.timestap}
                </div>
            </div>



        </div>


    </div>
}