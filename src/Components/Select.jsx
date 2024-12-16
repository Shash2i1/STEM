import React, { useId } from 'react';

function Select({
  options = [],
  label,
  className,
  ...props
}, ref) {
  const id = useId();

  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='flex flex-left font-bold'>{label}</label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            selected = {option.selected}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
