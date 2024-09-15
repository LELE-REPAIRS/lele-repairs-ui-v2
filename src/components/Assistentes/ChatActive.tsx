type ChatActiveProps = {
    name: string,
    categoria: string,
    last_message: string,
    last_message_date: string,
    avatar: string
}

function ChatActive({name, categoria, last_message, avatar, last_message_date}: ChatActiveProps){
    return (
        <div className="h-[50px] justify-start items-start gap-2.5 inline-flex">
            <img className="w-[50px] h-[50px] rounded-full" src={avatar}/>
            <div className="w-[196px] flex-col justify-start items-start inline-flex gap-1">
                <div className="self-stretch h-9 flex-col justify-start items-start flex">
                    <p className="self-stretch h-5 text-color_11 text-[15px] font-bold">{name}</p>
                    <p className="self-stretch h-4 text-color_9 text-[15px] font-normal">{categoria}</p>
                </div>
                <div className="h-3.5 justify-end items-center inline-flex">
                    <p className="w-60 h-3.5 text-black text-[10px] font-extralight leading-[14px] whitespace-nowrap overflow-hidden text-ellipsis">{last_message}</p>
                </div>
            </div>
            <p className="text-color_11 text-[10px] font-normal">{last_message_date}</p>
        </div>
    );
}

export default ChatActive;