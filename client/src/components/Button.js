const Button = ({ title, onClick, bgColor }) => {
  return (
    <div>
      <button
        className={`w-full h-14 ${bgColor} text-white rounded-md`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
