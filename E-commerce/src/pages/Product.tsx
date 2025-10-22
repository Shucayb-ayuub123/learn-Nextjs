import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";

import Data from "../Data.tsx";
import { Button } from "../Components/ui/button.tsx";
import { useParams } from "react-router";
const Product = () => {
    const {id} = useParams()
    const Prodct_id = Number(id)
    const Product  = Data.find((Data_id) => Data_id.id == Prodct_id)

  return (
    <div> 
  
        <Card className="w-md">
          <CardHeader>
            <CardTitle><img src={Product?.image} alt="" /></CardTitle>
            <div className="flex justify-between mt-3">
              <CardTitle>{Product?.name}</CardTitle>
              <CardTitle>${Product?.price}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>{Product?.description}</CardContent>

          <CardFooter className="flex justify-between">
            <Button>Add cart</Button>
            <span>{"⭐".repeat(Math.round(Product?.rating))}</span>
          </CardFooter>
        </Card>
    
    </div>
  );
};

export default Product;
