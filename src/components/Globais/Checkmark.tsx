type InputProps = {
    classname?: string,
    type: string,
    name: string,
    id: string,
    placeholder?: string, 
    minlength?: number,
    maxlength?: number,
    required?: boolean
}

function Checkmark({classname, type, name, id, placeholder, minlength, maxlength, required}: InputProps) {

    return (
        <div className="relative">
            <label className="block relative prcursor-pointer text-color_8 select-none">Lembrar senha
                <input className={classname} type={type} name={name} id={id} placeholder={placeholder} minLength={minlength} maxLength={maxlength} required={required}></input>
            </label>
        </div>
    );
}

export default Checkmark;