import { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
}

const FormInput = ({
  label,
  name,
  error,
  required = false,
  ...rest
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-purple-600 mb-1">
        {label}
        {required && <span className="text-purple-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200`}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormInput;