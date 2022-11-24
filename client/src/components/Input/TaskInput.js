const TaskInput = ({ placeholder, disabled, bgColor }) => {
  return (
    <div>
      <input
        className={`p-3 w-full h-9 border-2 border-slate-300 rounded-md focus:outline-none`}
        placeholder={placeholder}
        disabled={disabled}
      ></input>
    </div>
  );
};

export default TaskInput;
