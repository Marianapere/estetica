// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: "primary" | "outline";
//   type?: "button" | "submit" | "reset";
//   onClick?: () => void;
//   className?: string;
// }

// const Button = ({
//   children,
//   variant = "primary",
//   type = "button",
//   onClick,
//   className = "",
// }: ButtonProps) => {
//   const baseStyle =
//     "px-8 py-3 text-base rounded-md font-medium w-44 h-12 transition-colors duration-200";

//   const variants = {
//     primary: "bg-gray-900 text-white hover:bg-gray-800",
//     outline:
//       "border border-gray-800 text-gray-900 hover:bg-gray-800 hover:text-white",
//   };

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`${baseStyle} ${variants[variant]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

// ---------------------------------------------------------------------------------

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
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
    "px-8 py-3 text-base rounded-md font-medium w-44 h-12 transition-colors duration-200 transition-transform transform hover:scale-105 animate-fade-in";

  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    outline:
      "border border-gray-800 text-gray-900 hover:bg-gray-800 hover:text-white",
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
