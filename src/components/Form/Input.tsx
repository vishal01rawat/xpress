// Input.tsx

import React from "react";
import { twMerge } from "tailwind-merge";

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
  max?: any;
  disable?: any;
  stylePlaceholder?: any;
};

const Input: React.FC<Props> = ({
  name,
  placeholder,
  stylePlaceholder,
  register,
  style,
  error,
  required,
  maxLength,
  label,
  asterisk,
  labelPlus,
  max,
  type = "text",
  disable = false,
}) => {
  return (
    <div className='flex flex-col gap-y-2 relative md:mb-0'>
      <label htmlFor={name} className={twMerge(`text-gray-600 ${stylePlaceholder} text-xs `)}>
        {label} {labelPlus}
        <span className='text-red-500'>{asterisk}</span>
      </label>
      <input
        id={name}
        type={type}
        name={name}
        disabled={disable}
        placeholder={placeholder}
        maxLength={maxLength}
        onKeyUpCapture={(event: any) => {
          if (type === "number") {
            event.target.value = event.target.value.replace(/[^0-9+]/g, "");
          }
        }}
        max={max}
        autoComplete={"new-password"}
        {...register(name, { required })}
        className={twMerge(`border w-60 md:w-full ${style} text-sm focus:none p-1 outline-none  rounded-md relative`)}
      />
      {error[name] && (
        <p
          className='text-[10px] absolute top-[56px] text-red-600 text-left justify-start'
          data-error='data-error'
        >
          {error[name]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
