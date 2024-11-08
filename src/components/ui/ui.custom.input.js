

const CustomInput = ({ value, handleChangeValue, label, placeholder }) => {
  return (
    <div className="relative rounded-md border border-gray-200 flex">
      <label className={`${value ? 'block' : 'hidden'} text-sm pl-3 text-light text-gray-500 absolute top-0 left-0`}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
        className={`${value ? 'pt-4 pb-2 px-3' : 'p-3'} rounded-md outline-none w-full`} placeholder={placeholder} />
    </div>
  );
};


export default CustomInput;
