import React from "react";

interface TextAreaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => (
  <div className="mb-6">
    <label className="block text-white text-lg mb-2">{label}</label>
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none h-32"
    />
  </div>
);
