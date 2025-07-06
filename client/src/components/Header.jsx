import React, { useRef } from "react";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = async () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="mb-1.5 w-fit rounded-full bg-zinc-600">
            <a
              href="#"
              rel="nofollow"
              className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
            >
              <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
                NEW:
              </span>
              <span className="ml-1.5 mr-1 inline-block">
                AI insights integrated! ✨
              </span>
            </a>
          </div>
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Your only <span className="text-primary">finance</span> <br />{" "}
          platform.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          Your one stop guide to learn about the stock markets! People think
          that investing in stock markets is risky, deadly, and what not, but
          StockHub is here to teach you how to buy the castle you always wanted.
          Every dream has a price!
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>
      {/* <img
        src={Logo}
        alt="Gradient Background"
        className="absolute -top-50 -z-1 opacity-50"
      /> */}
    </div>
  );
};

export default Header;
