import { FormGroup } from "../../Molecule/Formgroup";

export function Form({ formFields, handleChange }) {
  return (
    <>
      {formFields.map((item) => (
        <FormGroup key={item.name} fields={item} />
      ))}
    </>
  );
}
