import React, { useState, useEffect, useContext } from "react";
import Book from "./Book";
import banner from "../image/bannerBook.svg";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = "AIzaSyD8IFYtw8AkkVT5FyTEyCpymufhTdrJAfM";
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=40`;

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get(URL).then((res) => {
      setData(res.data.items);

      setLoading(true);
    });
  };
  console.log(data);
  const bookHandler = (e) => {
    e.preventDefault();
    getData();
    setSearch("");
    setLoading(true);
  };
  console.log(data);
  return (
    <>
      <div>
        <div className="lg:flex justify-between items-center font-Nunito w-full">
          <div>
            <img src={banner} className="w-[700px]" />
          </div>

          <div className="mx-auto">
            <div className="top-10 font-bold font-Quicksand m-1 ml-4 lg:text-left md:text-center lg:my-2 lg:ml-4">
              <h1 className="">
                <p className="lg:text-4xl text-2xl lg:ml-5"> BOOKS</p>
                <p className="font-bold lg:text-8xl sm:m-4 text-4xl md:text-[76px]">
                  FOR ALL

                </p>
              </h1>
            </div>

            <div className="bg-slate-300 sm:mx-auto md:min-w-3xl lg:w-[530px] sm:w-96 md:w-[440px] mx-2 rounded-full lg:p-2 flex items-center justify-between">
              <input
                type="text"
                value={search}
                placeholder="Find Your Favorite Book here..."
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none pl-5 w-[220px] lg:placeholder:text-[14px] placeholder:text-[14px] placeholder:text-black"
              />

              <button
                className="bg-yellow-500 p-3 text-black lg:w-[90px] rounded-full"
                onClick={bookHandler}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="border-yellow-500 hidden lg:inline border-b"></div>
        <div className="grid sm:grid-cols-3 max-w-xs:grid-cols-1 my-8 lg:grid-cols-4 lg:gap-4 sm:gap-2 lg:gap-y-8 xl:grid-cols-4 gap-6 pt-4">
          {loading
            ? data.map((item) => {
                return <Book data={item} key={item.key}  />;
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Main;
