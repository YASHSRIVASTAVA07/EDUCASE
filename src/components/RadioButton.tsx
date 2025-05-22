import { InputHTMLAttributes } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  checked: boolean;
}

const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
  ...rest
}: RadioButtonProps) => {
  return (
    <label className="inline-flex items-center mr-4 cursor-pointer">
      <div className="relative flex items-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
          {...rest}
        />
        <div className={`w-5 h-5 border rounded-full flex items-center justify-center ${
          checked ? 'border-purple-600' : 'border-gray-400'
        }`}>
          {checked && (
            <div className="w-3 h-3 rounded-full bg-purple-600 animate-scale"></div>
          )}
        </div>
        <span className="ml-2 text-gray-700">{label}</span>
      </div>
    </label>
  );
};

export default RadioButton;