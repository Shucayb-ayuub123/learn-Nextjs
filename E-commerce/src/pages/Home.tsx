import React, { useState } from "react";
import logo from "../assets/Logo.png";
import Cart from "../assets/Cart.png";
import { Input } from "../Components/ui/input";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { useNavigate } from "react-router";
import type { ProductType } from "../ProductType";
import Data from "../Data";

const Home = () => {
  const [cart, setCart] = useState<number>(0);
  const [CartItem , setItem] = useState<number[]>([])
  const navigate = useNavigate();

  const GoCart = () => {
   const idString =  CartItem.join(',')
    navigate(`/Home/Cart/${idString}`)
  }
  
  const handleCart = (id:number) => {
    setItem((prev) => [...prev , id])
    setCart((prev) => prev + 1)

    
    

  }
  return (
    <div className="overflow-hidden">
      <nav className="w-max-4xl w-full flex sm:justify-center md:gap-x-20  items-center bg-gray-100 rounded-br-lg rounded-bl-lg shadow-md ">
        <div className=" w-20 md:w-20 ">
          <img src={logo} alt="" className="w-full h-20" />
        </div>

        <div className=" w-60 mr-3 lg:w-lg md:w-sm sm:mr-3 sm:w-md">
          <Input
            placeholder="Search the item"
            className="px-5 border-2 border-gray-400 w-full"
          />
        </div>
        <div
          className="relative w-14 bg-pink-400 rounded-lg cursor-pointer"
          onClick={GoCart}
        >
          <img src={Cart} alt="Cart" className="w-14 px-4 py-2" />

          {/* Cart count badge */}
          <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 bg-white text-pink-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
            {cart}
          </div>
        </div>
      </nav>

    <div className="px-20 w-11/12">
  <div className="mt-10 py-3 w-full">
    <h1 className="text-3xl font-semibold font-Poppins">
      Product Category
    </h1>
  </div>

  {/* Horizontal scrollable list */}
  <ul className="flex space-x-10 overflow-x-auto scrollbar-hide">
    <li className="border border-gray-400 shadow-md p-2 rounded-xl hover:bg-gray-100 cursor-pointer font-Poppins min-w-max">
      Men’s Clothing
    </li>
    <li className="border border-gray-400 shadow-md p-2 rounded-xl hover:bg-gray-100 cursor-pointer font-Poppins min-w-max">
      Kids’ Clothing
    </li>
    <li className="border border-gray-400 shadow-md p-2 rounded-xl hover:bg-gray-100 cursor-pointer font-Poppins min-w-max">
      Footwear
    </li>
    <li className="border border-gray-400 shadow-md p-2 rounded-xl hover:bg-gray-100 cursor-pointer font-Poppins min-w-max">
      Accessories
    </li>
  </ul>
</div>


      <div className="px-7 md:px-20 mt-4 mb-3">
        <div
          className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 md:grid-cols-2 gap-8 w-max-4xl"
          data-aos="fade-down"
        >
          {Data?.map((produc) => (
            <Card
              className="w-full  transform hover:scale-105 transition-transform duration-200 hover:shadow-2xl"
              key={produc.id}
            >
              <CardHeader>
                <CardTitle>
                  <img
                    src={produc.image}
                    className="w-full h-100 object-top  rounded-md"
                    alt=""
                  />
                </CardTitle>
                <CardTitle
                  className="flex justify-between mt-4"
                  onClick={() => navigate(`/Home/Product/${produc.id}`)}
                >
                  <h2 className="hover:underline cursor-pointer">
                    {produc.name}
                  </h2>
                  <h5>${produc.price}</h5>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p>{produc.description}</p>
              </CardContent>

              <CardFooter className="flex  justify-between">
                <Button onClick={() => handleCart(produc.id)}>Add Cart</Button>
                <span>{"⭐".repeat(Math.round(produc?.rating))}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
