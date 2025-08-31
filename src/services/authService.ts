// Mock authentication service
import type { LoginFormData, LoginResponse, User } from '../types/auth';

// Mock users database
const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@housecallspro.com',
    name: 'Administrator'
  },
  {
    id: '2', 
    username: 'demo',
    email: 'demo@housecallspro.com',
    name: 'Demo User'
  }
];

// Mock password (in real app, this would be handled securely on backend)
const MOCK_PASSWORD = 'password123';

export const authService = {
  // Mock login function
  login: async (formData: LoginFormData): Promise<LoginResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.username === formData.username);
    
    if (!user) {
      return {
        success: false,
        message: 'Username not found'
      };
    }
    
    if (formData.password !== MOCK_PASSWORD) {
      return {
        success: false,
        message: 'Invalid password'
      };
    }
    
    // Generate mock token
    const token = `mock-jwt-token-${Date.now()}`;
    
    // Store in localStorage if remember me is checked
    if (formData.rememberMe) {
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
    
    return {
      success: true,
      user,
      token,
      message: 'Login successful'
    };
  },
  
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('auth_token');
    return !!token;
  },
  
  // Get current user from localStorage
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  },
  
  // Logout function
  logout: (): void => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  },
  
  // Microsoft login mock
  loginWithMicrosoft: async (): Promise<LoginResponse> => {
    // Simulate Microsoft OAuth flow
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const user: User = {
      id: 'ms-1',
      username: 'microsoft.user',
      email: 'user@outlook.com',
      name: 'Microsoft User'
    };
    
    const token = `mock-ms-token-${Date.now()}`;
    
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    return {
      success: true,
      user,
      token,
      message: 'Microsoft login successful'
    };
  }
};
