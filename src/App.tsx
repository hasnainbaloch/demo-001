import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css'; // Import Ant Design CSS for v4
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { authService } from './services/authService';
import './styles/globals.scss';

// Ant Design theme configuration for v4
const antdTheme = {
  primaryColor: '#00b4e5',
};

const App: React.FC = () => {
  // Check if user is already authenticated on app load
  const isAuthenticated = authService.isAuthenticated();

  return (
    <ConfigProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/login" 
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <LoginPage />
                )
              } 
            />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard/*" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Default Route */}
            <Route 
              path="/" 
              element={
                <Navigate 
                  to={isAuthenticated ? "/dashboard" : "/login"} 
                  replace 
                />
              } 
            />
            
            {/* Catch all route */}
            <Route 
              path="*" 
              element={
                <Navigate 
                  to={isAuthenticated ? "/dashboard" : "/login"} 
                  replace 
                />
              } 
            />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
};

export default App;