export function SelectInput({ rowIndex, name, onChange, value, options }) {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => {
        if (rowIndex !== undefined && rowIndex !== null) {
          onChange(rowIndex, name, e.target.value);
        } else {
          onChange(name, e.target.value);
        }
      }}
    >
      {options.map((item, index) =>
        item?.subcategories?.length > 0 ? (
          <optgroup key={index} label={item.name}>
            {item.subcategories.map((subcat) => (
              <option key={subcat.value} value={subcat.value}>
                {subcat.alias}
              </option>
            ))}
          </optgroup>
        ) : (
          <option key={item.value} value={item.value}>
            {item.alias}
          </option>
        )
      )}
    </select>
  );
}
