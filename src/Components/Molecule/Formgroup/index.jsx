import { Input } from "../../Atom/Input/input";
import { SelectInput } from "../../Atom/Select/select";
import { Formlabel } from "../../Atom/label";

export function FormGroup({ fields, handleChange }) {
  return (
    <>
      <div className="formgroup">
        <Formlabel label={fields.label} name={fields.name} />
        {fields.inputType === "input" ? (
          <Input
            label={fields.label}
            name={fields.name}
            onChange={fields.onChange ? fields.onChange : handleChange}
            value={fields.value}
            type={fields.type}
            rowIndex={fields.rowIndex}
            placeholder={fields.placeholder}
          />
        ) : fields.inputType === "select" ? (
          <SelectInput
            placeholder={fields.placeholder}
            name={fields.name}
            options={fields.option}
            value={fields.value}
            rowIndex={fields.rowIndex}
            onChange={fields.onChange ? fields.onChange : handleChange}
          />
        ) : (
          <textArea />
        )}
      </div>
    </>
  );
}
