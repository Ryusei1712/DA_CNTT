import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInSide from './SignInSide'; // Đường dẫn tương đối đến file SignInSide.js
import App from './App'; // Đường dẫn tương đối đến file App.js


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Định nghĩa Route cho trang đăng nhập */}
        <Route path="/signin" element={<SignInSide />} />
        {/* Route cho trang chính */}
        <Route path="/app" element={<App />} />
        {/* Đường dẫn mặc định sẽ chuyển hướng đến trang đăng nhập */}
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// hoặc sử dụng ReactDOM.createRoot:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Định nghĩa Route cho trang đăng nhập */}
        <Route path="/signin" element={<SignInSide />} />
        {/* Route cho trang chính */}
        <Route path="/app" element={<App />} />
        {/* Đường dẫn mặc định sẽ chuyển hướng đến trang đăng nhập */}
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
