import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  fullWidth = false,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'py-3 px-4 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500',
    secondary: 'bg-purple-200 hover:bg-purple-300 text-purple-800 focus:ring-purple-300',
  };

  const widthClasses = fullWidth ? 'w-full' : '';
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClasses} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;