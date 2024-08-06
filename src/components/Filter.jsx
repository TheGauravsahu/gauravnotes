const filter = ({ handleFilterText }) => {
  return (
    <div className="">
      <select
        onChange={(e) => handleFilterText(e.target.value)}
        name=""
        id=""
        className="hover:cursor-pointer border font-semibold bg-white mx-auto mt-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[60%] w-[80%]  p-4"
      >
        <option value="">All Notes</option>
        <option value="BUSINESS">Business</option>
        <option value="PERSONAL">Personal</option>
        <option value="IMPORTANT">Important</option>
      </select>
    </div>
  );
};

export default filter;
