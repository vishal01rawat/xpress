import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UploadedItem {
  class: string;
  topic: string;
  description: string;
  files?: {
    pdf?: string[];
    video?: string[];
  };
}

const UploadedData: React.FC = () => {
  const [uploadedData, setUploadedData] = useState<UploadedItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<UploadedItem[]>('your-api-endpoint');
      setUploadedData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Uploaded Data</h1>
      <ul>
        {uploadedData.map((item, index) => (
          <li key={index}>
            <p>Class: {item.class}</p>
            <p>Topic: {item.topic}</p>
            <p>Description: {item.description}</p>
            {/* Render PDF files */}
            <div>
              {item.files && item.files.pdf && (
                <div>
                  <h3>PDF Files:</h3>
                  {item.files.pdf.map((pdf, pdfIndex) => (
                    <embed key={pdfIndex} src={pdf} width="500" height="300" type="application/pdf" />
                  ))}
                </div>
              )}
            </div>
            {/* Render video files */}
            <div>
              {item.files && item.files.video && (
                <div>
                  <h3>Video Files:</h3>
                  {item.files.video.map((video, videoIndex) => (
                    <video key={videoIndex} width="500" height="300" controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadedData;
