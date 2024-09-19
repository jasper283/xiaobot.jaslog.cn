import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string; // 可选属性
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'bg-primary' }) => {
  return (
    <button
      className={`${color} text-white font-bold py-2 px-4 rounded hover:bg-primary-700 transition duration-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
