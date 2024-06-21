export function Formlabel({label, name}){
    return <>
        <label htmlFor={name}>{label}</label>
    </>
}