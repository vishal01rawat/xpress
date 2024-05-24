/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */
import React, { useState } from "react"; // Import React explicitly
import { EyeIcon } from "@heroicons/react/20/solid";


/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  id?: string | number;
  register?: any;
  type?: string;
  style?: string;
  error?: string | any;
  required?: boolean;
  maxLength?: number;
  asterisk?: any;
  labelPlus?: any;
};
export const Password: React.FC<Props> = ({
  name,
  placeholder,
  register,
  style,
  error,
  required,
  maxLength,
  label,
  asterisk,
  labelPlus,
}) => {
  const [typeField, setTypeFields] = useState("password");

  
  return (
    <div className=''>
      <label htmlFor={name} className='text-gray-900 text-sm'>
        {label} {labelPlus}
        <span className='text-red-500'>{asterisk}</span>
      </label>
      <div className=''>
        <input
          type={typeField}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          autoComplete={"new-password"}
          {...register(name, { required })}
          className={` ${style} text-sm p-1 outline-none md:w-full w-60 relative`}
        />
       
      </div>
      {error[name] && (
        <p
          className='text-[10px] absolute -bottom-[20px] text-red-600 text-left justify-start'
          data-error='data-error'
        >
          {error[name]?.message}
        </p>
      )}
    </div>
  );
};
