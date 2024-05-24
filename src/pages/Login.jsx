import React, { useState } from "react";
import { useMutation, useQueryClient } from 'react-query'; 
import axios from 'axios';
import usePasswordToggle from "../hooks/usePasswordToggle";
// import { Spinner } from "../components/Spinner";
import { urlPath } from "../utils/Url";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { ENV } from "../environment";



function Login() {
  const navigate = useNavigate();
  const [inputType, toggleVisibility] = usePasswordToggle();
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  const authLogin = async (data) => {
    // const response = await axios.post(`https://localhost:44325/api/Auth/Login`, data);
    const response = await axios.post(`${ENV.BASE_URL}/Auth/Login`, data);
    return response;
  };

  const { mutate } = useMutation(authLogin, {
    onSuccess: (response) => {
      const { data } = response;
      localStorage.setItem('auth', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
      setIsLoading(false);
      navigate('/dashboard');
    },
    onError: () => {
      setIsLoading(false);
      setAuthError('Username or Password Is Incorrect');
    },
    onSettled: () => {
      setIsLoading(false);
    //   queryClient.invalidateQueries('create');
    },
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const login = {
      ...data,
    };
    mutate(login);
  };

  const validatePassword = (value) => {
    return value.length >= 4;
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const handleImageChange = (event)  => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setSelectedImage(imageUrl);
  };

  const handleButtonClick = () => {
    handleSubmit(onSubmit)();
    console.log('Button clicked');
  };

  return (
    <div>
      <div className="absolute inset-0 bg-cover bg-center bg-customBlack"></div>
        <hr className="border-b border-customBlack my-4" />

      <div className="relative flex flex-col justify-center  pt-10 sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" bg-customBlackFade    py-10  shadow sm:rounded-lg sm:px-10">
            <div className="flex justify-center rounded-xl">
              <label htmlFor="imageInput" className="cursor-pointer">
                {selectedImage ? (
                  <div className="mx-6">
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-20 h-20 cursor-pointer rounded-full"
                      title="Change Logo"
                    />
                  </div>
                ) : (
                  <div className="mr-4">
                    <img
                      src={`${urlPath.icon}hotel.png`}
                      alt="Upload Image"
                      className="w-20 h-20 cursor-pointer rounded-full object-cover"
                      title="Choose Logo"
                    />
                  </div>
                )}
              </label>
              <input
                onChange={handleImageChange}
                id="imageInput"
                type="file"
                className="hidden"
              />
            </div>

            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} >

            {authError && (
								<p className='text-red text-red-600 p-1 font-bold mt-2 rounded-md text-center'>
									{authError}
								</p>
							)}
            

              {/* <div>
                <label
                  htmlFor="hcode"
                  className=" ml-1 block text-sm font-medium text-white"
                >
                  Hotel Code
                </label>
                <input
                  id="hcode"
                  name="hcode"
                  type="text"
                  placeholder="Hotel Code"
                  {...register("hcode", { required: true })}
                  required
                  className=" mt-1 appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customBlackFade text-white transition duration-300 ease-in-out hover:border-white focus:ring-2 focus:ring-opacity-50  focus:border-transparent"
                />
                {errors.hcode && <span className="absolute ml-60 mt-2 text-red-500 text-xs">Hotel Code is required</span>}
              </div> */}
             {/* <div>
                 <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email address
                </label>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    {...register("email", { required: true })}
                    className=" mt-1 appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customBlackFade text-white transition duration-300 ease-in-out hover:border-white focus:ring-2 focus:ring-opacity-50  focus:border-transparent"
                  />
                  <img
                    src={`${urlPath.icon}user.png`}
                    alt="Email Icon"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
                  />
                </div>
                {errors.email && <span className=" absolute ml-60 mt-1 text-red-500 text-xs">Email adress is required</span>} 
              </div>*/}

              <div className="mt-10">
           
<label
  htmlFor="username"
  className="block text-sm font-medium text-white"
>
  Username
</label>

<input
  id="username"
  username="username"
  type="text"
  placeholder="Username"
  required
  {...register("username", { required: true })}
  className=" mt-1 appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customBlackFade text-white transition duration-300 ease-in-out hover:border-white focus:ring-2 focus:ring-opacity-50  focus:border-transparent"
/>
{errors.username && <span className=" absolute ml-60 mt-1 text-red-500 text-xs">Username is required</span>}

              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    password="password"
                    type={inputType}
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                    {...register("password", { required: true })}
                    className="mt-1 appearance-none block w-full px-3 py-2 pr-10 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customBlackFade text-white transition duration-300 ease-in-out hover:border-white focus:ring-2 focus:ring-opacity-50  focus:border-transparent"
                  />
                  <img
                    src={inputType === "password" ? `${urlPath.icon}invisible.png` : `${urlPath.icon}show.png`}
                    alt="Password Icon"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer opacity-80  hover:opacity-100  hover:scale-110 transition-transform duration-100 "
                    onClick={toggleVisibility}
                  />
                </div>
                {errors.password && <span className=" absolute ml-60 mt-1 text-red-500 text-xs">   Password is required</span>}
              </div>

              <div className="p-2">
                <Button buttonText="Log In" onClick={handleButtonClick}   isLoading={isLoading} className="w-full text-white font-bold py-1" />
              </div>
              <div className="text-center    ">
                <span className=" cursor-pointer text-white hover:text-customGreen transition-colors duration-300 ease-in-out text-sm underline " onClick={() => navigate('/emailsend')} >
                  Forgot your password?
                </span>
              </div>
              {/* <hr className="border-b border-customBlack my-4" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;