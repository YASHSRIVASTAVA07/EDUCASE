import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: true,
  });

  if (isAuthenticated) {
    navigate('/account');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate('/account');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-md mx-auto pt-8">
        <h1 className="text-[28px] font-semibold text-gray-900 mb-8">
          Create your PopX account
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="input-label">
              Full Name<span className="required-star">*</span>
            </label>
            <input
              type="text"
              className="input-field"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="input-label">
              Phone number<span className="required-star">*</span>
            </label>
            <input
              type="tel"
              className="input-field"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>

          <div>
            <label className="input-label">
              Email address<span className="required-star">*</span>
            </label>
            <input
              type="email"
              className="input-field"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="input-label">
              Password<span className="required-star">*</span>
            </label>
            <input
              type="password"
              className="input-field"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div>
            <label className="input-label">
              Company name
            </label>
            <input
              type="text"
              className="input-field"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>

          <div>
            <p className="input-label mb-2">
              Are you an Agency?<span className="required-star">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency}
                  onChange={() => setFormData({ ...formData, isAgency: true })}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  checked={!formData.isAgency}
                  onChange={() => setFormData({ ...formData, isAgency: false })}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg font-medium mt-8"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;