import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContextBook } from "../context/CartContext";
import Reading from "../image/Reading.svg";
import { IoIosArrowBack } from "react-icons/io";

const FavBook = () => {
  const splitedTitle = (title) => {
    const shortTtle = title.split(" ");
    let jointTitle = `${shortTtle[0]} ${shortTtle[1]}`;
    return jointTitle;
  };
  const { state, dispatch } = useContext(CartContextBook);

  return (
    <>
      {state.selectedFavorite.length >= 1 ? (
        <div className="lg:w-1/2 sm:w-3/4 w-full h-auto mx-auto sm:border-black sm:border-[5px] my-10 rounded-3xl bg-opacity-20">
          <h1 className="text-center m-4 text-4xl">
            <span className="first-letter:text-4xl">Your </span>
            <span className="first-letter:text-4xl">Wishlist</span>
          </h1>

          {state.selectedFavorite.map((item) => {
            return (
              <div className="p-2 lg:flex flex lg:flex-row flex-col border-b-2 lg:mx-1">
                <div className="my-3 flex mx-auto items-center lg:m-1 lg:mr-4 xl:mr-6">
                  <img
                    className="lg:w-[200px] w-[140px] h-[196px]"
                    src={
                      item.volumeInfo.imageLinks &&
                      item.volumeInfo.imageLinks.thumbnail
                    }
                  />
                </div>
                <div className="w-full">
                  <p className="flex items-center">
                    {splitedTitle(item.volumeInfo.title)}
                    <p className="mx-1 text-sm font-bold">
                      {item.saleInfo.isEbook ? (
                        <p className="text-green-600">Availble</p>
                      ) : (
                        <p className="text-red-600">Not Availble</p>
                      )}
                    </p>
                  </p>
                  <p className="my-2">
                    by{" "}
                    <span className="text-amber-600 text-[18px]">
                      {item.volumeInfo.authors && item.volumeInfo.authors[0]}
                    </span>
                  </p>
                  <p className="my-2">
                    publisher:
                    <span className="text-slate-400">
                      {" "}
                      {item.volumeInfo.publisher}
                    </span>
                  </p>
                  <p className="m-1">
                    format Available:{" "}
                    <span className="text-amber-600 font-bold">
                      {item.accessInfo.epub.isAvailable ? "epub" : ""}{" "}
                    </span>
                    <span className="m-2 text-amber-600 font-bold">
                      {item.accessInfo.pdf.isAvailable ? "pdf" : ""}
                    </span>
                  </p>
                  <p className="my-2 ml-1 text-xl font-bold ">23.4 $</p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_ITEMS", payload: item })
                      }
                      className="bg-yellow-500 group text-sm h-10 p-2 text-center my-2 rounded-md hover:bg-white hover:border-2 transition ease-in-out hover:duration-300 hover:border-yellow-500"
                    >
                      Add to cart
                    </button>

                    <button
                      className="border-2 border-red-600 group text-sm h-10 p-2 text-center my-2 rounded-md hover:bg-white hover:border-2 transition ease-in-out hover:duration-300"
                      onClick={() => {
                        dispatch({ type: "REMOVE-ITEM-FAV", payload: item });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-1/2 flex flex-col justify-start items-center overflow-y-hidden h-screen mx-auto">
          <p className="lg:text-3xl capitalize text-[14px] mt-8">
            your whislist is empty!
          </p>
          <Link
            to="/"
            className="capitalize my-4 text-yellow-500 text-xl flex items-center rounded-lg p-1"
          >
            <IoIosArrowBack className=" text-black" />
            go back home
          </Link>
          <img src={Reading} className="w-[400px] h-[400px] my-auto" />
        </div>
      )}
      <div>
        <button></button>
      </div>
    </>
  );
};

export default FavBook;
