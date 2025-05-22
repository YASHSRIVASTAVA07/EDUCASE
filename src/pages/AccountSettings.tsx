import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AccountSettings = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    navigate('/signin');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-medium">Account Settings</h1>
      </header>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 flex items-start gap-4">
            <div className="relative">
              <img
                src={user?.profileImage}
                alt={user?.fullName}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-purple-600 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h2 className="font-medium text-lg">{user?.fullName}</h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
          
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;