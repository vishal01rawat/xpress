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




    const [providerList, setProviderList] = useState([]);
    const fetchWatchList = async (id: any) => {
      try {
        const payload = {
          classId: +id,
        };
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${ENV.BASE_URL}/Provider/GetByOrganizationId`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token && `Bearer ${JSON.parse(token)}`,
            },
          }
        );
        if (response.status === 200) {
          const providerList = response.data.map((item: any) => {
            return {
              id: item.providerId,
              title: item.providerName,
              budgetScans: item.monthlyScanLimit,
              currentScans: item.currentScan,
            };
          });
          setProviderList(providerList);
        }
      } catch (err: any) {
        toast.error(err?.response?.data?.message || err?.message || err);
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
