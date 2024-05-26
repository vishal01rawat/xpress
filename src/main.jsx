import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Zoom, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import EmailSend from "./pages/EmailSend.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import Upload from "./pages/UploadContent.tsx";
import Watch from "./pages/WatchContent.tsx";
import UploadedData from "./pages/UploadedData.tsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="emailsend" element={<EmailSend />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />

          <Route path="/" element={<Layout />}>
            <Route path="upload" element={<Upload />} />
            <Route path="watch" element={<Watch />} />
            <Route path="uploaded-data" element={<UploadedData />} />
            
            
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        hideProgressBar={true}
        transition={Zoom}
        position={"top-right"}
        autoClose={1500}
      />

    </QueryClientProvider>
  </React.StrictMode>
);
