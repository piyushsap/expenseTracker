import { Input } from "../../Atom/Input/input";
import { SelectInput } from "../../Atom/Select/select";
import { Formlabel } from "../../Atom/label";

export function FormGroup({fields}) {
  console.log(fields,1111)
  return (
    <>
      <div className="formgroup">
        <Formlabel label={fields.label} name={fields.name} />
        {fields.inputType === "input" ? (
          <Input
            label={fields.label}
            name={fields.name}
            onChange={fields.onChange}
            value={fields.value}
            type={fields.type}
            placeholder={fields.placeholder}
          />
        ) : fields.inputType === "select" ? (
          <SelectInput
            name={fields.name}
            options={fields.option}
            value={fields.value}
            onChange={fields.onChange}
          />
        ) : (
          <textArea />
        )}
      </div>
    </>
  );
}
