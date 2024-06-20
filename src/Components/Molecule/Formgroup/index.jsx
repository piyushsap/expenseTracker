import { Input } from "../../Atom/Input/input";
import { Formlabel } from "../../Atom/label";

export function FormGroup({label, name, onChange, value, type, placeholder}) {
    return <>
        <div className="formgroup">
            <Formlabel label={label} />
            <Input label={label} name={name} onChange={onChange} value={value} type={type} placeholder={placeholder} />
        </div>
    </>
}