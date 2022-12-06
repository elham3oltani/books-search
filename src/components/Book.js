import React, { useContext } from "react";
import { IsInCart } from "../helper/functions";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { CartContextBook } from "../context/CartContext";

const Book = ({ data }) => {
  const image =
    data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail;
  const author = data.volumeInfo.authors && data.volumeInfo.authors[0];
const { state, dispatch } = useContext(CartContextBook);


if(image !== undefined && author!==undefined ){
  return (
    
    <>
      <div className="mx-auto font-Nunito font-bold m-1">
        <div className="xl:w-[280px] md:w-[230px] w-[260px] border-4 rounded-b-xl rounded-t-2xl">
          <div className="relative shadow-2xl">
            <img
              src={image}
              alt="book"
              className="lg:w-[300px] w-[260px] h-[250px] rounded-t-2xl object-cover mx-auto"
            />
            <div className="absolute top-0 right-0 border-2 w-[34px] m-1 border-red-600 h-[34px] text-center rounded-full">
              {IsInCart(state, data.id) ? (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE-ITEM", payload: data })
                  }
                  className="text-center my-1 rounded-full hover:text-white transition ease-in-out delay-150"
                >
                  <BsSuitHeartFill className="text-red-500" size={25} />
                </button>
              ) : (
                <button
                  className="text-center my-1 text-white transition ease-in-out rounded-r-full"
                  onClick={() =>
                    dispatch({ type: "ADD-FAVORITE", payload: data })
                  }
                >
                  <BsSuitHeart size={25} className="hover:text-red-500 transition ease-in-out delay-150" />
                </button>
              )}
            </div>
           
          </div>
          <div className="mx-auto text-center text-[18px]">
            <p className="mx-auto overflow-hidden whitespace-nowrap text-ellipsis">
            </p>
            <p className="overflow-hidden whitespace-nowrap text-neutral-500 text-ellipsis m-1"> {author} </p>
            <p className="text-2xl font-Quicksand m-2">20.3 $</p>

          </div>
         

              <button
                onClick={() =>
                  dispatch({ type:"ADD_ITEMS", payload: data })
                }
                className="bg-yellow-500 mt-2 w-max-[266px] group w-[244px] sm:w-[214px] lg:w-[265px] flex items-center justify-center h-11 text-lg text-center py-[6px] m-1 rounded-lg hover:bg-white hover:border-2 transition ease-in-out hover:duration-100 hover:border-yellow-500"
              >
                Add to cart
              </button>
        </div>
      </div>
    </>
  ); 
}
   
  
};

export default Book;
