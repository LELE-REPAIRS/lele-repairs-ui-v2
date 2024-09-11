import { Link } from "react-router-dom";

type MenuListProps = {
    icon: string,
    select: boolean,
    to: string,
    value: string
}

function MenuList({icon, select, to, value}: MenuListProps) {
    
    const no_selected:string = 'p-4 rounded-lg flex-col justify-start items-start gap-2.5 flex';
    const selected:string = 'p-4 bg-color_3 rounded-2xl border-2 border-color_7 flex-col justify-start items-start gap-2.5 flex';
    let class_result:string = '';
    let font:string = '';

    if (select == true) {
        class_result = selected
        font = 'font-bold';
    } else {
        class_result = no_selected
        font = 'font-normal';
    }

    return (
        <div className={class_result}>
            <div className="w-[186px] h-6 justify-start items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative">
                    <div className={`w-6 h-6 left-0 top-0 absolute ${icon}`}></div>
                </div>
                <Link className={`text-color_9 text-base ${font} leading-snug`} to={to}>{value}</Link>
            </div>
        </div>    
    );
}

export default MenuList;