import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  isAgency: boolean;
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: Omit<User, 'id'>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo user credentials
const DEMO_USER = {
  id: '1',
  fullName: 'Marry Doe',
  email: 'marry@gmail.com',
  password: 'password123', // In a real app, this would be hashed
  phoneNumber: '+1234567890',
  companyName: 'Acme Inc',
  isAgency: true,
  profileImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  const login = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email.toLowerCase() === DEMO_USER.email && password === DEMO_USER.password) {
          const { password: _, ...userData } = DEMO_USER;
          setUser(userData);
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = async (userData: Omit<User, 'id'>) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser({
          id: '1',
          ...userData,
        });
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};