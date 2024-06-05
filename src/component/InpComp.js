const InpComp = ({ value, type, addFun, className, placeholder }) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      onChange={addFun}
      placeholder={placeholder}
    />
  );
};

export default InpComp;
