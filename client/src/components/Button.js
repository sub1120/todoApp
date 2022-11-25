const Button = ({ title, onClick, bgColor, type }) => {
  return (
    <div>
      <button
        className={`w-full h-14 ${bgColor} text-white rounded-md`}
        onClick={onClick}
        type={type}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
