const Button = ({ text = "Submit", className }) => {
  return (
    <div>
      <button className={`${className} bg-[#20FFE8] rounded-[5px]`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
