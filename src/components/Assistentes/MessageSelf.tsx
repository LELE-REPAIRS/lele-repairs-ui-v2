type MessageSelfProps = {
    menssagem: string,
    tempo: string,
    avatar: string
}

function MessageSelf({menssagem, tempo, avatar}: MessageSelfProps) {
    return (
        <div className="self-stretch justify-end items-center gap-3 inline-flex">
            <div className="w-[271px] bg-color_3 rounded-[30px] border-r-[5px] border-color_7 p-[40px_15px_15px]">
                <div className="relative bottom-[25px] text-right text-color_11 text-[10px] font-normal">{tempo}</div>
                <div className="w-[235px] text-color_11 text-[15px] font-normal text-justify">{menssagem}</div>
            </div>
            <img className="w-[50px] h-[50px] rounded-full" src={avatar}/>
        </div>
    );
}

export default MessageSelf;