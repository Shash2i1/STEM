import React, { useId } from 'react'

function Input({
    label,
    type = "text",
    className,
    ...props
}, ref) {

    const id = useId();
    return (
        <div className='w-full p-2'>
            {label &&
                <label 
                
                htmlFor={id} 
                className='flex items-left'>
                    {label}
                </label>
            }
            <input 
            type={type} 
            className={className} 
            {...props} 
            ref={ref} />
        </div>
    )
}

export default React.forwardRef(Input)