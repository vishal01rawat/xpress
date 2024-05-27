import React from 'react';
import useWatchContent from '../service/useWatchContent';

function UploadedData() {
    const { data, isLoading, isError } = useWatchContent();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

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
