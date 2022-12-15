import { FaSearch } from "react-icons/fa";
const Search = () => {
    return (
        <div className="my-16 bg-white p-10 border-b-2 border-b-cyan-900 hover:border-b-red-700">
            <h2 className="text-2xl font-bold mb-5">Search</h2>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search ..."
                    className="input input-bordered h-[60px] w-full bg-white"
                />
                <button className="btn  bg-red-600 hover:bg-red-500 absolute h-[60px] text-white text-2xl right-0 border-none">
                    <FaSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;