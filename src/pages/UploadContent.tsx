import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';

const Upload = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
  
      // Prepare the data object
      const dataPayload = {
        Class: data.class,
        Topic: data.topic,
        Description: data.description
      };
  
      // Create a FormData object to store your data``
      const formData = new FormData();
  
      // Append the structured data as a JSON string directly to the FormData
      formData.append('Data', JSON.stringify(dataPayload));
  
      // Append each file separately if they exist
      data.pdfFiles && formData.append('Files', data.pdfFiles[0]);
      data.videoFiles && formData.append('Files', data.videoFiles[0]);
  
      // Send the POST request with Axios
      const response = await axios.post(
        'https://localhost:7188/api/Learning/upload', 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
          }
        }
      );
  
      console.log(response.data);
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
            id="pdfFiles"
            type="file"
            accept="application/pdf"
            {...register("pdfFiles")}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Video Files
          </label>
          <input
            id="videoFiles"
            type="file"
            accept="video/*"
            {...register("videoFiles")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            buttonText="Upload"
            isLoading={loading}
            onClick={handleSubmit(onSubmit)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default Upload;










// import React, { useState } from 'react';
// import axios from 'axios';
// import Button from '../components/Button';
// import { useForm } from 'react-hook-form';

// const Upload = () => {
//   const [loading, setLoading] = useState(false);
//   const { register, handleSubmit, setValue } = useForm();

//   const onSubmit = async (data: any) => {
//     try {
//       setLoading(true);
  
//       // Create payload for data
//       const dataPayload = {
//         class: data.class,
//         topic: data.topic,
//         description: data.description
//       };
  
//       // Create payload for files
//       // const filesPayload = {
//       //   files: data.Files
//       // };
//       // const filesPayload = new FormData();
//       // filesPayload.append('pdfFiles', data.pdfFiles);
//       // filesPayload.append('videoFiles', data.videoFiles);

//       const filesPayload = new FormData();
//       filesPayload.append('Data', JSON.stringify(data)); // Convert JSON data to string
//             // Append each file separately
//             data.pdfFiles && filesPayload.append('Files', data.pdfFiles[0]);
//             data.videoFiles && filesPayload.append('Files', data.videoFiles[0]);
  
//       // Define your headers
//       const headers = {
//         'Content-Type': 'application/json',
//         // Add any other headers you need, such as authorization tokens
//       };
  
//       // Make your API call here
//       const response = await axios.post('https://localhost:7188/api/Learning/Upload', {
        
//         Files: filesPayload
//       }, { headers });
  
//       console.log(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setLoading(false);
//     }
//   };
  
  

//   return (
//     <div className="my-10 flex justify-center">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">
//             Select Class
//           </label>
//           <select
//             id="class"
//             className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
//             {...register("class")}
//           >
//             <option value="Class A">Class A</option>
//             <option value="Class B">Class B</option>
//             <option value="Class C">Class C</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
//             Topic
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="topic"
//             type="text"
//             placeholder="Enter topic"
            
//             {...register("topic")}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//             Description
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="description"
//             placeholder="Enter description"
            
//             {...register("description")}
//           />
//         </div>
//         // Modify the file input for PDF files
// <div className="mb-6">
//   <label className="block text-gray-700 text-sm font-bold mb-2">
//     Upload PDF Files
//   </label>
//   <input
//     id="pdfFiles"
//     type="file"
//     accept="application/pdf"
//     {...register("Files")}
//   />
// </div>

// // Modify the file input for video files
// <div className="mb-6">
//   <label className="block text-gray-700 text-sm font-bold mb-2">
//     Upload Video Files
//   </label>
//   <input
//     id="videoFiles"
//     type="file"
//     accept="video/*"
//     {...register("Files")}
//   />
// </div>

//         <div className="flex items-center justify-between">
//           <Button
//             buttonText="Upload"
//             onClick={handleSubmit(onSubmit)}
//             isLoading={loading}
           
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           />
         
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Upload;
