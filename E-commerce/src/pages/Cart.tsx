import { useState } from "react";
import { data, useParams } from "react-router";
import Data from "../Data.tsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../Components/ui/card.tsx";
import { Button } from "../Components/ui/button.tsx";
import type { ProductType } from "../ProductType.ts";
import Product from "./Product.tsx";

const Cart = () => {
  const [Quantity, setQuntit] = useState<ProductType[]>(Data);
  const { id } = useParams();

  const increasingQuantity = (id: number) => {
    setQuntit((prev) =>
      prev.map((Product1) =>
        Product1.id == id
          ? { ...Product1, quantity: Product1.quantity + 1 }
          : Product1
      )
    );
  };
  const idNumber = id ? id.split(",").map(Number) : [];

  const CartId = Quantity.filter((data) => idNumber.includes(data.id));

  const totalPrice = CartId.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const DeleteItem = (id: number) => {
    setQuntit((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 ">
        {CartId.map((cart) => {
          const productQuantity =
            Quantity.find((p) => p.id == cart.id)?.quantity || 0;

          return (
            <div key={cart.id} className="w-full p-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <img
                      src={cart.image}
                      className="w-full object-cover h-70 rounded"
                      alt=""
                    />
                  </CardTitle>
                  <div className="flex justify-between">
                    <CardTitle>{cart.name}</CardTitle>
                    <CardTitle>${cart.price}</CardTitle>
                  </div>
                </CardHeader>

                <CardDescription className="px-6">
                  {cart.description}
                </CardDescription>

                <CardFooter className="flex space-x-10">
                  <Button onClick={() => DeleteItem(cart.id)}>
                    Delete item
                  </Button>
                  <Button
                    variant={"destructive"}
                    onClick={() => increasingQuantity(cart.id)}
                  >
                    Quantiy {productQuantity}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="flex  w-9/12 space-x-150 fixed top-186 h-10    md:left-50 ">
        <div className="w-full p-3  bg-white flex space-x-100  items-center rounded-tl-xl  rounded-tr-xl">
          <div className="flex-1 flex space-x-4 w-full ">
            <h1 className="font-semibold text-2xl">Total : </h1>
            <h4 className="font-semibold text-2xl">
              {" "}
              ${Math.round(totalPrice * 100) / 100}
            </h4>
          </div>

          <div className=" flex-1 flex justify-end w-full">
            <Button variant={""} onClick={() => handleCheckout()}>
             Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
