export function VideoCard(props: any) {
    return <div className="cursor-pointer">
        <img src={props.image}
            className=" rounded-xl"
        ></img>
        <div className="grid grid-cols-12 pt-2 ">
            <div className="col-span-1 ">
                <img className={"rounded-full  w-8 h-8 "} src={props.thumbnail} >
                </img>
            </div>
            <div className="col-span-11 pl-2 text-sm">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 text-grey-400 text-[9px]">
                    {props.author}
                </div>
                <div className="col-span-11 text-grey-400 text-[9px]">
                    {props.views} | {props.timeStamp}</div>

            </div>

        </div>

    </div>
}