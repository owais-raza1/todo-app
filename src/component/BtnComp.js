const BtnComp = ({ className, text, addFun }) => {
  return (
    <button className={className} onClick={addFun}>
      {text}
    </button>
  );
};

export default BtnComp;
