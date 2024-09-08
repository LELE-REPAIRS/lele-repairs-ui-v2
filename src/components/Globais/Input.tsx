type InputProps = {
    classname?: string,
    type: string,
    name: string,
    id: string,
    placeholder?: string, 
    minlength?: number,
    maxlength?: number,
    required?: boolean,
    icon?: string,
}

function Input({icon, classname, type, name, id, placeholder, minlength, maxlength, required}: InputProps) {


    return (
        <div className="relative">
            <div className={`${icon} bg-no-repeat h-6 w-6 absolute top-1/2 left-[5%] -translate-y-1/2 box-border z-10`}></div>
            <input className={classname} type={type} name={name} id={id} placeholder={placeholder} minLength={minlength} maxLength={maxlength} required={required}></input>
        </div>
    );
}

export default Input;