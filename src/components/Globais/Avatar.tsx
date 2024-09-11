type AvatarProps = {
    src: string,
    name: string,
    email: string
}

function Avatar({src, name, email}: AvatarProps) {
    return (
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <img className="w-[50px] h-[50px] relative rounded-[25px]" src={src}/>
            <div className="flex-col justify-center items-start inline-flex">
                <div className="w-[150px] text-color_11 text-base font-bold whitespace-nowrap overflow-hidden text-ellipsis">{name}</div>
                <div className="w-[150px] text-color_9 text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis">{email}</div>
            </div>
        </div>
    );
}

export default Avatar;