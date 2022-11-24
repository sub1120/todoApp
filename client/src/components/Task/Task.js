const Task = ({ taskName, disabled, iseditMode, refElement }) => {
  return (
    <input
      className={`w-full h-full p-2 focus:outline-none ${
        iseditMode ? "bg-white-400" : "bg-slate-200"
      }`}
      disabled={disabled}
      defaultValue={taskName}
      placeholder="Task Name"
      ref={refElement}
    ></input>
  );
};

export default Task;
