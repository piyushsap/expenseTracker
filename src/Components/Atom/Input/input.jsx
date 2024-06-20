export function Input({ label, name, type, placeholder, onChange, value }) {
  return (
    <>
      <input
        name={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}  
      ></input>
    </>
  );
}
