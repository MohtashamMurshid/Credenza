import React from "react";

interface SubmitButtonProps {
  text: string;
  onClick: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
  >
    {text}
  </button>
);
