interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "auth";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) => {
  const baseStyle =
    "rounded-md font-medium transition-colors duration-200 transition-transform transform hover:scale-105 animate-fade-in";

  const variants = {
    primary:
      "px-8 py-3 text-base w-44 h-12 bg-gray-900 text-white hover:bg-gray-800",
    outline:
      "px-8 py-3 text-base w-44 h-12 border border-gray-800 text-gray-600 hover:bg-gray-800 hover:text-white",
    auth: "px-4 py-2 text-base bg-[rgb(177,240,247)]  text-gray-500 rounded hover:bg-[rgb(177,240,247)]  transition", // más pequeño
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
