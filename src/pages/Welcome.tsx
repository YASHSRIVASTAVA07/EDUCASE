import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Welcome = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate('/account');
    return null;
  }

  return (
    <div className="min-h-screen flex items-end justify-center bg-[#F7F8F9] px-4">
      <div className="w-full max-w-sm pb-10">
        <h1 className="text-xl font-semibold text-gray-900 mb-1">Welcome to PopX</h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/signup')}
            className="w-full py-3 bg-[#6C25FF] text-white rounded-md font-medium"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/signin')}
            className="w-full py-3 bg-[#F7F8F9] text-[#6C25FF] rounded-md font-medium border border-[#6C25FF] bg-purple-100"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
