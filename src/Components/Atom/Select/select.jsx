import React, { useEffect } from "react";

export function SelectInput({ name, onChange, value, options }) {
  useEffect(() => {
    options.forEach((item) => {
      console.log(item);
    });
  }, [options]);

  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
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
