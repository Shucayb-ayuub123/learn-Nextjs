import { Metadata } from "next";

type Props = {
  params: {
    productsId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {productsId} = await params;
  return {
    title: `Product ${productsId}`,
  };
}


async function page({ params }: { params: { productsId: string } }) {

  const { productsId } = await params;

  
  return (
    <div>
      <h1>Product Details and more {productsId}</h1>
    </div>
  );
}

export default page;
