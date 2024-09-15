type CarProps = {
    apelido: string,
    marca: string,
    modelo: string,
    ano: number,
    img_car: string,
    km: number
}


function Car({apelido, marca, modelo, ano, img_car, km}: CarProps){
    return (
        <div className="h-[50px] justify-start items-start gap-2.5 inline-flex">
            <img className="w-[50px] h-[50px] rounded-full" src={img_car}/>
            <div className="w-[196px] flex-col justify-start items-start inline-flex gap-1">
                <div className="self-stretch h-9 flex-col justify-start items-start flex">
                    <p className="self-stretch h-5 text-color_11 text-[15px] font-bold">{apelido}</p>
                    <p className="self-stretch h-4 text-color_9 text-[15px] font-normal">{marca}</p>
                </div>
                <div className="h-3.5 justify-end items-center inline-flex">
                    <p className="w-60 h-3.5 text-black text-[10px] font-extralight leading-[14px]">{marca} - {modelo} - {ano} - {km}km rodados</p>
                </div>
            </div>
        </div>
    );
}

export default Car;