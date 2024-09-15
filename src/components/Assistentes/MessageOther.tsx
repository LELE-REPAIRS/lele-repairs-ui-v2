type MessageOtherProps = {
    menssagem: string,
    tempo: string,
    avatar: string
}

function MessageOther({menssagem, tempo, avatar}: MessageOtherProps) {
    return (
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <img className="w-[50px] h-[50px] rounded-full" src={avatar}/>
            <div className="w-[271px] bg-color_4 rounded-[30px] border-l-[5px] border-color_7 p-[40px_15px_15px]">
                <div className="relative bottom-[25px] text-right text-color_11 text-[10px] font-normal">{tempo}</div>
                <div className="w-[235px] text-color_11 text-[15px] font-normal text-justify">{menssagem}</div>
            </div>
        </div>
    );
}

export default MessageOther;