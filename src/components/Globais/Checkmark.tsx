type CheckmarkProps = {
    name: string,
    id: string,
    required?: boolean,
    value: string | "Valor não definido"
}

function Checkmark({name, id, required, value}: CheckmarkProps) {

    return (
        <label className="checkbox">{value}
            <input type="checkbox" id={id} name={name} required={required}/>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkmark;