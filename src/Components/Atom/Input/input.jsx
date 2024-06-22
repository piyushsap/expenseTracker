export function Input({ rowIndex, label, name, type, placeholder, onChange, value }) {
  // console.log(rowIndex, label, name, type, placeholder, onChange, value)
  return (
    <>
      <input
        name={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (rowIndex !== undefined && rowIndex !== null) {
            onChange(rowIndex, name, e.target.value);
          } else {
            onChange(name, e.target.value);
          }
        }}
      ></input>
    </>
  );
}
