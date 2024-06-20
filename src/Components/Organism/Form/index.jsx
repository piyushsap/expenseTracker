import { FormGroup } from "../../Molecule/Formgroup";

export function Form({ formFields, handleChange }) {
  return (
    <>
      {formFields.map((item) => (
        <FormGroup key={item.name} label={item.label} type={item.type} name={item.name} onChange={handleChange} placeholder={item.placeholder} />
      ))}
    </>
  );
}
