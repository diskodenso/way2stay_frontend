import { useNavigate } from "react-router-dom";

const StartSwapping = () => {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const { searchString } = e.target;
    navigate(`/flats?city=${searchString.value}`);
  };
  return (
    <div className="rounded-lg w-1/2 bg-yellow shadow-lg p-2">
      <form className="flex w-full p-3" onSubmit={submitHandler}>
        <div className="flex flex-col w-full">
          <label className="pb-3 font-heading font-bold text-xl">
            My destination should be:
          </label>
          <input
            name="searchString"
            className="p-2 rounded focus:outline-[#505050]"
            placeholder="city"
          />
          <div className="mt-4 text-right">
            <button className="w-1/3 bg-opacity-0 border-2 border-[#505050] rounded-md px-3 py-1 text-[#505050] font-bold hover:bg-[#505050] hover:text-yellow">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StartSwapping;
