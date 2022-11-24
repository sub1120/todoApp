const Button = ({ title, onClick, bgColor, type }) => {
  return (
    <div>
      <button
        className={`w-full h-14 ${bgColor} text-white rounded-md`}
        onClick={onClick ? onClick : () => {}}
        type={type ? type : "button"}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
