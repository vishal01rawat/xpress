/** @format */
import React from "react";
import Input from "../components/Form/Input.tsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendEmailSchema } from "../utils/Schema.tsx";
import axios from "axios";
import { ENV } from "../environment";
import { Zoom, toast } from "react-toastify";
import { useState } from "react";
import Button from "../components/Button";

function EmailSend() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(sendEmailSchema),
  });
  const [isLoading, SetIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      SetIsLoading(true);
      const token = localStorage.getItem("token");
      const response: any = await axios.post(
        `${ENV.BASE_URL}/Users/CheckUserByEmail`,
        {
          Email: data.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      if (response?.data?.isError) throw response?.data?.message;

      if (!response?.data.isError) {
        reset();
        SetIsLoading(false);
        toast.success(response?.data.message || "", {
          transition: Zoom,
          // position: "top-center",
        });
      }
    } catch (err: any) {
      reset();
      SetIsLoading(false);
      toast.error(err?.response?.data?.message || err?.message || err, {
        // position: "top-center",
      });
    }
  };

  const handleButtonClick = () => {
    handleSubmit(onSubmit)();
    console.log('Button clicked');
  };

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-customBlack' >
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[34%]'>
        <form onSubmit={handleSubmit(onSubmit)} className=' bg-customBlackFade rounded-lg px-12 pb-16 py-8'>
          <h1 className=' text-white text-xl mb-6 text-center'>Forgot Password?</h1>

          <p className=' text-white mt-4 truncate w-full flex items-center gap-x-2  mx-auto item-center'>
                Enter Email <span className='text-red-400'>*</span>{" "}
                
              </p>
          <Input
            
            type='email'
            name='email'
            id='email'
            style='w-full mt-1 appearance-none block w-full px-3 py-2 pr-10 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customBlackFade text-white transition duration-300 ease-in-out hover:border-white focus:ring-2 focus:ring-opacity-50  focus:border-transparent'
            placeholder='Enter Email'
            register={register}
            error={errors}
          />
          <Button buttonText="Submit" onClick={handleButtonClick}   isLoading={isLoading} className="w-full mt-10 text-white font-bold py-1" />
        
        </form>
      </div>
    </div>
    </div>
  );
}

export default EmailSend;
