import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  if (isAuthenticated) {
    navigate('/account');
    return null;
  }

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    try {
      await login(formData.email, formData.password);
      navigate('/account');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-md mx-auto pt-20">
        <h1 className="text-[28px] font-semibold text-gray-900 mb-2">
          Signin to your PopX account
        </h1>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="input-label">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="input-field"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          
          <div>
            <label className="input-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          
          <button 
            type="submit"
            className={`w-full py-3 px-4 rounded-lg font-medium mt-4 ${
              isFormValid 
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : 'bg-gray-300 text-gray-700 cursor-not-allowed'
            } transition-colors`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;