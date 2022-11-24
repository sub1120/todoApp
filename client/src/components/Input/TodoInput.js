const TextInput = ({ placeholder, disabled, bgColor }) => {
  return (
    <div>
      <input
        className={`p-3 w-full h-14 border-2 border-slate-300 ${bgColor} rounded-md focus:outline-none`}
        placeholder={placeholder}
        disabled={disabled}
      ></input>
    </div>
  );
};

export default TextInput;
