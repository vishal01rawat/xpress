import React from 'react';
import useWatchContent from '../service/useWatchContent';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { ENV } from "../environment";


function UploadedData() {
    const { data, isLoading, isError } = useWatchContent();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }


    const searchParams = new URLSearchParams(location.search);
    const classId = searchParams.get("classId");

    const [providerList, setProviderList] = useState([]);
    const fetchWatchList = async (id: any) => {
      try {
        const payload = {
          classId: +id,
        };
        
        const response = await axios.post(
          `${ENV.BASE_URL}/Learning/Files`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
             
            },
          }
        );
        if (response.status === 200) {
          const providerList = response.data.map((item: any) => {
            return {
           
            };
          });
          setProviderList(providerList);
        }
      } catch (err: any) {
       console.log(err,"Error");
      }
    };
  
    useEffect(() => {
      fetchWatchList(classId);
    }, []);



    return (
        <div>
            <h1>Uploaded Data</h1>
            <div>
                {data?.contentList.map((item, index) => (
                    <div key={index}>
                        <p>Class ID: {item.CLASSID}</p>
                        <p>Class: {item.CLASS}</p>
                        <p>Topic: {item.TOPIC}</p>
                        <p>Description: {item.DESCRIPTION}</p>
                        <p>Active: {item.ACTIVE}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UploadedData;
