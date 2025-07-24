import React from "react"

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  name?: string;
};

const Input: React.FC<InputProps> = ({
  onChange,
  className = "",
  value = "",
  type = "text",
  placeholder = "",
  name = "",
}) => {
  return (
    <div className="token-input">
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Input
