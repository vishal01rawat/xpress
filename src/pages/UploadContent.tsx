





import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';

const Upload = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

const onSubmit = async (data:any) => {
  try {
    setLoading(true);
    console.log(data, "data aya kya");

    // Create a payload object
    const payload = {
      Data: {
        class: data.class,
        topic: data.topic,
        description: data.description
      },
      Files: {
        files: data.Files
      }
    };

    // Make your API call here
    const response = await axios.post('your-api-endpoint', payload);
    console.log(response.data); // Log the response if needed

    setLoading(false);
  } catch (error) {
    console.error('Error:', error);
    setLoading(false);
  }
};


  return (
    <div className="my-10 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">
            Select Class
          </label>
          <select
            id="class"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
            {...register("class")}
          >
            <option value="Class A">Class A</option>
            <option value="Class B">Class B</option>
            <option value="Class C">Class C</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
            Topic
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="topic"
            type="text"
            placeholder="Enter topic"
            
            {...register("topic")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
            
            {...register("description")}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload PDF Files
          </label>
          <input
            id="Files"
            type="file"
            accept="application/pdf"
            multiple
            {...register("Files")}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Video Files
          </label>
          <input
            id="Files"
            type="file"
            accept="video/*"
            multiple
            
            {...register("Files")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            buttonText="Upload"
            onClick={handleSubmit(onSubmit)}
            isLoading={loading}
           
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
         
        </div>
      </form>
    </div>
  );
};

export default Upload;
