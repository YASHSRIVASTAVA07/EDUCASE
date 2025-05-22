import { UserCircle } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'away';
}

const Avatar = ({
  src,
  alt = 'User avatar',
  size = 'md',
  status,
}: AvatarProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
  };

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizeClasses[size]} rounded-full object-cover transition-all duration-200 border-2 border-white`}
        />
      ) : (
        <UserCircle
          className={`${sizeClasses[size]} text-gray-400`}
          aria-hidden="true"
        />
      )}
      
      {status && (
        <span
          className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${statusColors[status]}`}
        />
      )}
    </div>
  );
};

export default Avatar;