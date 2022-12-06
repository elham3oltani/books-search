import React, { useContext } from "react";
import { CartContextBook } from "../context/CartContext";
import { TbTrashX } from "react-icons/tb";
import { quantityCount, IsInCart } from "../components/helper/functions";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io"
import checkout from "../image/checkout.svg"
const ShoppingCart = () => {
  const splitedTitle = (title) => {
    const shortTtle = title.split(" ");
    let jointTitle = `${shortTtle[0]} ${shortTtle[1]}`;
    return jointTitle;
  };
  const { state, dispatch } = useContext(CartContextBook);

  return (
    <>
      {state.selectedItems.length >= 1 ? (
        <div className="flex lg:w-3/5 xl:w-2/5 bg-black w-full my-4 mx-auto text-white justify-between items-center">
          <h1 className="rounded-l-full text-white p-3 flex text-sm lg:text-md items-center">
            Your{" "}
            <span className="text-yellow-500 text-xl lg:text-2xl m-1">
              Cart
            </span>
          </h1>
          <h1 className="text-center p-3 text-xl lg:text-2xl text-yellow-500 flex items-center">
            {state.itemsCounter}{" "}
            <span className="text-white lg:text-[16px] text-[14px] m-1">
              Items
            </span>
          </h1>
        </div>
      ) : (
        <p className="text-center text-[28px] lg:text-3xl my-6 capitalize">empty shopping cart !</p>
      )}
      {state.selectedItems.map((item) => {
        return (
          <div className="lg:w-3/5 xl:w-2/5 w-full sm:w-1/2 mt-4 mx-auto h-auto rounded-xl">
            <div className="lg:flex flex-col shadow-lg">
              <div className="m-4">
                <img
                  src={
                    item.volumeInfo.imageLinks &&
                    item.volumeInfo.imageLinks.thumbnail
                  }
                  className="w-[150px] h-[200px] mx-auto"
                />
              </div>
              <div className="lg:flex lg:flex-row sm:flex-row lg:mx-1 my-4 flex md:flex-col flex-col justify-between items-center">
                <div className="md:ml-2 lg:ml-2 text-center lg:text-left">
                  <p className="flex items-center justify-center md:justify-start">
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
                    <span className="text-slate-400 text-[18px]">

                    {item.volumeInfo.authors && item.volumeInfo.authors[0]}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col justify-between items-center">
                  <div className="flex items-center">
                    {quantityCount(state, item.id) === 1 && (
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE-ITEM", payload: item })
                        }
                        className="bg-yellow-500 rounded-2xl px-1 mr-2 w-14 py-1"
                      >
                        <TbTrashX size={20} className="mx-auto" />
                      </button>
                    )}

                    {quantityCount(state, item.id) > 1 && (
                      <button
                        onClick={() =>
                          dispatch({ type: "DECRESS", payload: item })
                        }
                        className="bg-yellow-500 rounded-2xl w-14 mx-2 px-1 text-lg"
                      >
                        -
                      </button>
                    )}
                    {quantityCount(state, item.id) > 0 && (
                      <span className="font-bold">
                        {quantityCount(state, item.id)}
                      </span>
                    )}
                    {IsInCart(state, item.id) ? (
                      <button
                        onClick={() =>
                          dispatch({ type: "INCRESS", payload: item })
                        }
                        className="rounded-2xl bg-yellow-500 px-1 w-14 mx-2 text-lg"
                      >
                        +
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          dispatch({ type: "ADD_ITEMS", payload: item })
                        }
                        className="border rounded-2xl px-3 py-0.5 border-black"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                  <p className="my-2 ml-1 text-xl font-bold ">23.4 $</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="lg:w-2/5 sm:w-1/2 w-full mx-auto m-2 mb-14">
        {state.itemsCounter > 0 && (
            <div className="my-4 flex flex-col items-center">
              <p className="my-4">
                <span className="lg:font-bold text-[16px] lg:text-[20px]">
                  Total items :
                </span>
                <span className="text-yellow-600 text-center font-bold text-[15px] lg:text-[18px] ml-1">
                  {state.total}
                </span>
              </p>
              <button
                onClick={() => dispatch({ type: "CHECKOUT" })}
                className="bg-black text-white w-1/2 text-[16px] rounded-md lg:py-3 py-2 lg:font-bold"
              >
                Checkout
              </button>
              <Link
              to="/"
              className="flex text-black lg:px-3 px-2 py-1 my-6 text-[16px] border-2 border-yellow-500 rounded-md lg:py-2"
            >
              Go to Shop
            </Link>
            </div>
        )}

        {state.chekout && (
          <div className="mx-10 mb-8">
            <h3 className="font-bold text-green-600">
              Check Out Success Fully
            </h3>
            <Link to="/" className="flex text-orange-600">
              Buy More!
            </Link>
          </div>
        )}

        {!state.chekout && state.itemsCounter === 0 && (
          <div className="mb-8 text-center">
            <h3 className="font-bold text-green-600 text-2xl my-2">
              Clear Success Fully
            </h3>
            <Link
              to="/"
              className="flex text-yellow-500 items-center mx-auto text-xl w-fit px-4 my-4"
            >
              <IoIosArrowBack className="text-black text-xl" />
              Go to Shop
            </Link>
            <img src={checkout} className="w-[400px] h-[400px] mx-auto" />
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
