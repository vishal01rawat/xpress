/** @format */

import React from 'react';

import { useForm } from "react-hook-form";
import { Password } from "../components/Form/Password";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from '../utils/Schema';
import axios from "axios";
import { toast } from "react-toastify";
import { ENV } from "../environment";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Spinner } from "../components/Spinner";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Button from '../components/Button';

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(forgetPasswordSchema),
  });
  const { search } = useLocation();
  const uniqueId = new URLSearchParams(`${search}`).get("id");
  // const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

 

  const onSubmit = async (data: any) => {
    
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response: any = await axios.post(
        `${ENV.BASE_URL}/Users/ResetPassword`,
        {
          password: data.password,
          uniqueId: uniqueId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      if (response?.data?.isError) {
        throw response?.data?.message;
      }
      setIsLoading(false);
      toast.success(response?.data?.message);
      navigate("/login");
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err?.response?.data?.message || err?.message || err);
      navigate("/login");
    }
  };

  useEffect(() => {
    async function isExpire(uniqueId: any) {
      try {
        const token = localStorage.getItem("token");
        const response: any = await axios.post(
          `${ENV.BASE_URL}/Users/validateLink`,
          {
            uniqueId: uniqueId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token && `Bearer ${JSON.parse(token)}`,
            },
          }
        );
        if (response?.data?.isError) {
          toast.error(response?.data?.message);
          navigate("/login");
        }
      } catch (err: any) {
        toast.error(err?.response?.data?.message || err?.message || err);
        navigate("/login");
      }
    }
    if (uniqueId) {
      isExpire(uniqueId);
    }
  }, []);
  
  const handleButtonClick = () => {
    handleSubmit(onSubmit)();
    console.log('Button clicked');
  };
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-customBlack' >
    <div className='w-full min-h-full'>
      <div className='w-[34%] m-auto items-center mb-10  justify-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=' px-12 pb-8 py-8 bg-customBlackFade rounded-lg'
        > 
          {/* {/* {error && (
            <p className='text-red-400 text-center p-2 mb-2'>
              {error}{" "}  
              <button
                className='underline text-black'
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </p>
          )} */}
          <h1 className='text-md mb-6 text-center text-white' title='forgot'>
            Forgot Password
          </h1>
          <div className='flex'>
            <div className='relative flex flex-col items-center group'>
              <p className=' text-white truncate w-full flex items-center gap-x-2  text-center justify-center mx-auto item-center'>
                New Password <span className='text-red-400'>*</span>{" "}
                <InformationCircleIcon className='h-4 w-4' />
              </p>
              <div className='absolute  top-0  pb-2 flex-col items-center hidden mb-6 group-hover:flex'>
                <div className='w-3 h-3 mt-6 rotate-45 bg-gray-400'></div>
                <span className='w-full relative z-10 p-2 -mt-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-400 shadow-lg'>
                  Password must be combination of min 2 lowercase, min 2 Special
                  characters, min 2 numbers and min 2 uppercase letters
                </span>
              </div>
            </div>
          </div>

          <Password
            name='password'
            placeholder='password'
            
            id={"password"}
            error={errors}
            asterisk={""}
            required={true}
            type='text'
            style='w-full mt-1 appearance-none block w-full px-3 py-2 pr-10 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customBlackFade text-white transition duration-300 ease-in-out hover:border-white focus:ring-2 focus:ring-opacity-50  focus:border-transparent'
            register={register}
          />

         
          <p className=' text-white mt-4 truncate w-full flex items-center gap-x-2  mx-auto item-center'>
                Confirm Password <span className='text-red-400'>*</span>{" "}
                
              </p>
          <Password
            name='confirmPassword'
            placeholder='Confirm Password'
            
            id={"confirmPassword"}
            error={errors}
            
            required={true}
            type='text'
            style='w-full mt-1 appearance-none block w-full px-3 py-2 pr-10 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customBlackFade text-white transition duration-300 ease-in-out hover:border-white focus:ring-2 focus:ring-opacity-50  focus:border-transparent'
            register={register}
          />
          <Button buttonText="Submit" onClick={handleButtonClick}   isLoading={isLoading} className="w-full mt-10 text-white font-bold py-1" />
        
          {/* <button
            type='submit'
            className='w-full  mt-6 flex items-center justify-center gap-x-4 text-white bg-black  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            {isSubmit && <Spinner />}
            Submit
          </button> */}
        </form>
      </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
