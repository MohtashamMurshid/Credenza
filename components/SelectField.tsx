import React from "react";

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
}) => (
  <div className="mb-6">
    <label className="block text-white text-lg mb-2">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
    >
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
